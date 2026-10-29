# AFTERHOURS: The Museum of Unreality

A cooperative browser mystery for 2–4 visitors. Mara Venn, the museum’s curator, has disappeared. The official records suggest a staged exit; the exhibits suggest the museum has begun to remember the night—and to repeat it.

## Run locally

Requires Node.js 20 or newer. There are no third-party packages or external runtime assets.

```sh
npm start
```

Open `http://localhost:3000` in two or more independent browser sessions, create a room, and join with its six-character code. Set `PORT` to change the listening port.

## How the fractured reality works

The server owns the canonical exhibit facts, validated answers, shared Anchors, timer, votes, and game phase. Each visitor gets a private set of observation cards. On the first exhibit, four roles each receive a distinct canonical clue: the portrait’s hand, gaze, clock, or inscription. The rendered portrait focuses on that visitor’s assigned detail. As the story advances, player distortion selects deterministic alternate descriptions from the same versioned room seed. A shared Anchor can verify a submitted observation and reveal whether it matches the objective record.

Private clue data is sent only to the authenticated player session. The answer key and canonical fact text are never part of the client payload before an exhibit resolves. Shared actions are validated by the server; answers stay private until all currently connected visitors submit. A room code is for joining, while a separate random session token authorizes each player.

## Game loop

1. Create a room and invite 1–3 visitors by code.
2. Compare private observations on the shared evidence board.
3. Spend up to three shared Anchors to verify a clue, reveal one reliable fact, or stabilize a player.
4. Each visitor privately submits a reconstruction. The server advances only when everyone agrees on the correct answer.
5. Continue through the Hall of Doors and the Room That Remembers. The final reveal turns the apparent cover-up into a supernatural mystery.

A phase has a synchronized 2:50 deadline. One recovery Anchor can be restored once per exhibit if the team gets stuck or after repeated failed consensus. A host disconnect transfers host control to an online visitor; active answer consensus uses currently connected visitors, so the remaining group can continue. A reconnecting visitor resumes using their tab’s session token. Rooms live in server memory and are lost when the server process restarts.

The group earns 100 points for a correct consensus, 10 points for each Anchor left, and 5 points for each distinct clue shared, up to four clues. Repeated clue submissions are rejected and incorrect consensus earns no points.

## Deploy through GitHub and Render

The included `render.yaml` defines a free Node web service. The project is ready to push to GitHub; Render can connect to the repository and create the service from that Blueprint.

1. Create a private GitHub repository and push this project to its `main` branch.
2. In Render, choose **New → Blueprint**, connect the repository, and review the service before deploying.
3. After the service is live at its `onrender.com` address, add `play.dortizwills.com` under the service’s Custom Domains.
4. Add the DNS record Render displays at the provider that manages `dortizwills.com`, then verify the domain in Render.
5. Add a link to `play.dortizwills.com` from the personal site using its existing site editor or repository. Leave the root domain’s DNS and current site deployment unchanged.

The server listens on `0.0.0.0` and reads `PORT`. It keeps rooms in memory, so a process restart clears active games; run a single web-service instance. Render’s free web services sleep after 15 minutes without inbound activity, so treat the free Blueprint as a contest/demo deployment and expect a cold start after idle time. Multi-instance hosting would require shared room storage and pub/sub.

**Current status:** The deployment Blueprint is prepared, but there is no GitHub connection, GitHub repository, Render connection, or DNS access configured in this workspace. No repository has been pushed, no service created, no DNS changed, and no public URL is claimed.

## Verification

The local two-session acceptance script is in `work/verify-multiplayer.js`. It verifies room creation and joining, distinct private clue sets, canonical-answer isolation, reconnect determinism, synchronized evidence and phase updates, duplicate-action rejection, Anchor consumption, all three exhibits, group scoring, host handoff, rematch, and continuation with the remaining online visitor. Run it with the server already started:

```sh
node work/verify-multiplayer.js
```

Automated local check: **PASS** for the cases listed above. The live UI was inspected in two independent browser tabs; each showed distinct private portrait details and synchronized shared evidence. Full mobile interaction, deadline expiry, simultaneous-action stress, and public deployment remain **NOT TESTED**.
