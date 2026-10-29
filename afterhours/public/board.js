(function () {
  const esc = value => String(value == null ? '' : value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const glyphs = {hand:'✿',gaze:'◉',clock:'◷',inscription:'✎',rule:'⌘',first:'◯',middle:'✦',last:'☾',evidence1:'▤',evidence2:'ϟ',evidence3:'◉',memory:'✳'};
  function adjacent(map, from, to) {
    return map.paths.some(edge => (edge[0] === from && edge[1] === to) || (edge[1] === from && edge[0] === to));
  }
  function pawns(state, station) {
    return state.players.map((player, index) => player.location === station.id
      ? '<span class="pawn pawn-' + index + (player.online ? '' : ' pawn-away') + '" title="' + esc(player.name) + '">' + esc(player.name.slice(0,1).toUpperCase()) + '</span>'
      : '').join('');
  }
  function stationNode(state, station) {
    const current = station.id === state.me.location;
    const canMove = current || adjacent(state.exhibit.map, state.me.location, station.id);
    const visitors = pawns(state, station);
    return '<button class="map-station' + (current ? ' is-current' : '') + (!canMove ? ' is-distant' : '') + '" data-move="' + esc(station.id) + '" style="--x:' + station.x + '%;--y:' + station.y + '%" ' + (canMove ? '' : 'disabled') + '>' +
      '<span class="station-symbol">' + esc(station.symbol) + '</span><span class="station-name">' + esc(station.name) + '</span>' +
      '<span class="station-status">' + (current ? 'YOUR PAWN' : visitors ? 'VISITOR HERE' : 'MOVE HERE') + '</span>' +
      (visitors ? '<span class="station-pawns">' + visitors + '</span>' : '') + '</button>';
  }
  function boardSvg(map) {
    return '<svg class="board-paths" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">' +
      map.paths.map(edge => {
        const a = map.stations.find(s => s.id === edge[0]), b = map.stations.find(s => s.id === edge[1]);
        return '<line x1="' + a.x + '" y1="' + a.y + '" x2="' + b.x + '" y2="' + b.y + '"/>';
      }).join('') + '</svg>';
  }
  function clueCard(state, observation, index) {
    const station = state.exhibit.map.stations.find(s => s.id === observation.stationId);
    const played = state.evidence.some(e => e.factId === observation.id && e.own);
    const here = state.me.location === observation.stationId;
    return '<article class="hand-card' + (played ? ' is-played' : '') + '" style="--card-order:' + index + '">' +
      '<div class="card-ribbon"><span>PRIVATE EVIDENCE</span><span>' + String(index + 1).padStart(2,'0') + ' / ' + String(state.me.observations.length).padStart(2,'0') + '</span></div>' +
      '<div class="card-art"><span>' + esc(glyphs[observation.id] || '✧') + '</span><i></i><b></b></div>' +
      '<div class="card-copy"><small>' + esc(state.me.role) + ' · OBSERVATION</small><h3>' + esc(observation.label) + '</h3><p>' + esc(observation.view) + '</p></div>' +
      '<div class="card-location"><span>FOUND AT</span><b>' + esc(station ? station.name : 'Unknown station') + '</b></div>' +
      '<button class="play-card" data-share="' + esc(observation.id) + '" ' + (played || busy || !here ? 'disabled' : '') + '>' +
      (played ? 'PLAYED · ON THE CASE TABLE' : here ? 'PLAY THIS CARD' : 'MOVE TO ' + esc((station ? station.name : 'STATION').toUpperCase())) + '</button></article>';
  }
  function sharedCard(state, evidence) {
    return '<article class="played-card' + (evidence.verified ? ' is-verified' : '') + '">' +
      '<div class="played-card-head"><span class="played-mark">' + esc(glyphs[evidence.factId] || '✧') + '</span><span><b>' + esc(evidence.label) + '</b><small>PLAYED BY ' + esc(evidence.playerName) + '</small></span></div>' +
      '<p>“' + esc(evidence.text) + '”</p>' +
      (evidence.verified ? '<div class="anchor-stamp ' + (evidence.matchesTruth ? 'stamp-true' : 'stamp-false') + '">' + (evidence.matchesTruth ? 'ANCHOR CONFIRMED' : 'RECORD DISAGREES') + '<small>' + esc(evidence.canonical) + '</small></div>' : '<button class="seal-card" data-verify="' + esc(evidence.id) + '" ' + (state.anchors < 1 || busy ? 'disabled' : '') + '>✳ PRESS AN ANCHOR SEAL · 1</button>') +
      '</article>';
  }
  function answersFor(state) {
    const ix = state.exhibitIndex;
    if (ix === 0) return [['item','What did Mara take?',[['key','Brass key'],['flower','Pressed flower'],['mirror','Hand mirror'],['nothing','Nothing']]],['place','Where is it now?',[['frame','Inside the east frame'],['plinth','Under the plinth'],['east-door','Beyond the east door'],['ledger','In the ledger']]],['time','When did the change happen?',[['11:47','11:47 PM'],['11:42','11:42 PM'],['midnight','Midnight'],['11:13','11:13 PM']]]];
    if (ix === 1) return [['route','Which route is valid?',[['split circle → three-pronged star → crescent','Split circle → Star → Crescent'],['crescent → split circle → star','Crescent → Split circle → Star'],['star → star → crescent','Star → Star → Crescent'],['split circle → blank → crescent','Split circle → Blank → Crescent']]]];
    return [['sequence','Put the events in order',[['11:42 ledger → 11:47 lights fail → midnight bell','11:42 Ledger → 11:47 Lights fail → Midnight Bell'],['11:47 lights fail → 11:42 ledger → midnight bell','11:47 Lights fail → 11:42 Ledger → Midnight Bell'],['midnight bell → 11:42 ledger → 11:47 lights fail','Midnight Bell → 11:42 Ledger → 11:47 Lights fail'],['11:42 ledger → midnight bell → 11:47 lights fail','11:42 Ledger → Midnight Bell → 11:47 Lights fail']]]);
  }
  window.afterhoursBoard = function (state, scene) {
    const map = state.exhibit.map;
    const where = map.stations.find(s => s.id === state.me.location);
    const played = state.evidence.length;
    const fields = answersFor(state);
    const status = state.me.observations.filter(o => state.evidence.some(e => e.factId === o.id && e.own)).length;
    return '<main class="game-shell tabletop-shell">' + room(state) +
      '<header class="tabletop-heading"><div><p class="eyebrow">' + esc(state.exhibit.eyebrow) + ' · EXHIBIT ' + (state.exhibitIndex + 1) + ' OF 3</p><h1>' + esc(state.exhibit.title) + '</h1><p>' + esc(state.exhibit.intro) + '</p></div><div class="timer"><small>THE FINAL BELL</small><b id="clock">--:--</b></div></header>' +
      '<div class="game-layout"><section class="exhibit-column">' +
        '<section class="museum-map panel"><div class="map-header"><div><div class="panel-kicker">THE MUSEUM FLOOR PLAN</div><h2>' + esc(map.title) + '</h2></div><div class="map-current"><small>YOUR PAWN</small><b>' + esc(where ? where.name : 'Gallery floor') + '</b></div></div>' +
          '<div class="board-surface">' + boardSvg(map) + map.stations.map(s => stationNode(state,s)).join('') +
            '<div class="board-key"><span class="pawn pawn-0">Y</span> your group <i></i> one-space passage</div></div>' +
          '<p class="move-instruction"><b>' + esc(where ? where.name : 'Gallery floor') + '.</b> ' + (where ? 'Choose one connected space to move your pawn. Then play a matching card from your hand.' : 'Choose a connected station to move.') + ' Movement is free; Anchors are reserved for the case.</p></section>' +
        '<section class="hand-table panel"><div class="hand-header"><div><div class="panel-kicker">YOUR HAND</div><h2>' + esc(state.me.role) + ' <span>· ' + status + ' of ' + state.me.observations.length + ' played</span></h2></div><div class="hand-tip">Go to the card’s station<br>to play it on the board.</div></div><div class="hand-cards">' +
          state.me.observations.map((o,i) => clueCard(state,o,i)).join('') + '</div></section>' +
        '<div class="museum-vignette">' + scene(state.me) + '</div>' +
      '</section><aside class="sidebar">' +
        '<section class="panel group-panel"><div class="panel-heading"><div><div class="panel-kicker">THE VISITORS</div><h2>Pawn positions <span>' + state.players.length + '</span></h2></div><div class="mini-presence">' + state.players.map(p => '<i class="' + (p.online ? '' : 'offline') + '" title="' + esc(p.name) + '"></i>').join('') + '</div></div>' +
          '<div class="player-list">' + state.players.map((p,i) => '<div class="player-row"><span class="pawn pawn-' + i + '">' + esc(p.name.slice(0,1).toUpperCase()) + '</span><span>' + esc(p.name) + (p.id === state.me.id ? ' <small>(YOU)</small>' : '') + '</span><span class="player-role">' + esc((map.stations.find(s => s.id === p.location) || {}).name || 'At the door') + '</span></div>').join('') + '</div>' +
          '<div class="group-footer"><span>' + played + ' CARDS ON THE TABLE</span><span>' + state.players.filter(p => p.online).length + ' HERE NOW</span></div></section>' +
        '<section class="case-table panel"><div class="panel-heading"><div><div class="panel-kicker">SHARED CASE TABLE</div><h2>Cards played <span>' + played + '</span></h2></div><span class="lock-mark">⌑</span></div><p class="deduction-hint">Lay down what you saw. Compare versions, then stamp a card if your group needs certainty.</p>' +
          (state.evidence.length ? '<div class="played-cards">' + state.evidence.map(e => sharedCard(state,e)).join('') + '</div>' : '<div class="empty-evidence"><span>✧</span><b>The table is ready.</b><small>Move to a station and play a private observation card to start the case.</small></div>') +
          '<div class="group-footer"><span>' + played + ' CARDS SHARED</span><span>' + state.anchors + ' ANCHOR SEALS LEFT</span></div></section>' +
        '<section class="panel deduction-panel"><div class="panel-heading"><div><div class="panel-kicker">FINAL CASE FILE</div><h2>Reconstruct the night</h2></div><span class="lock-mark">⌑</span></div><p class="deduction-hint">Discuss the cards. Each visitor locks in a private answer; the team must agree.</p>' +
          fields.map(([field,label,opts]) => '<label class="answer-field">' + esc(label) + '<select name="' + esc(field) + '"><option value="">Choose an answer…</option>' + opts.map(([value,labelText]) => '<option value="' + esc(value) + '">' + esc(labelText) + '</option>').join('') + '</select>' + (state.publicReveal && state.publicReveal[field] ? '<small class="reliable-fragment">✳ Reliable fragment: ' + esc(state.publicReveal[field]) + '</small>' : '') + '</label>').join('') +
          '<button class="button button-gold wide" id="solve" ' + (state.hasVoted || busy ? 'disabled' : '') + '>' + (state.hasVoted ? 'ANSWER LOCKED · ' + state.voteCount + ' / ' + state.total : 'LOCK MY ANSWER') + '</button><p class="fine-print">A wrong consensus keeps the group at this exhibit. Revisit the case table.</p>' + (state.notice ? '<div class="recovery-note">' + esc(state.notice) + '</div>' : '') + '</section>' +
        '<section class="anchor-panel"><div class="anchor-panel-title"><svg class="seal-icon" viewBox="0 0 40 40"><circle cx="20" cy="20" r="15"/><path d="M20 4v32M4 20h32M9 9l22 22M31 9 9 31"/></svg><div><b>Shared Anchor seals</b><small>' + state.anchors + ' left · verify a card or reveal a fact</small></div></div><div class="anchor-actions"><button data-reveal="' + (state.exhibitIndex === 0 ? 'time' : state.exhibitIndex === 1 ? 'route' : 'sequence') + '" ' + (state.anchors < 1 || busy ? 'disabled' : '') + '>REVEAL A FACT · 1</button><button data-stabilize ' + (state.anchors < 1 || busy ? 'disabled' : '') + '>STEADY YOUR VIEW · 1</button></div><small class="anchor-cost">Spend carefully. Each seal can only be used once.</small></section>' +
        (state.publicHint ? '<div class="recovery-note">' + esc(state.publicHint) + '</div>' : '') +
      '</aside></div><footer class="game-foot"><span>THE BOARD KEEPS EACH VISITOR’S VIEW IN PLACE</span><span>SESSION ' + esc(state.code) + '</span><button data-hint>STUCK? RESTORE A RECOVERY ANCHOR</button></footer></main>';
  };
})();
