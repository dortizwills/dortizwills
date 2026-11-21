import { Capacitor, registerPlugin } from '@capacitor/core';

export type NativeRoom = { positions: number[]; indices: number[]; points: number[]; source: 'lidar-mesh' | 'arkit-points' };
type RoomScanPlugin = { scan(): Promise<NativeRoom> };
const plugin = registerPlugin<RoomScanPlugin>('RoomScan');
export const canScanNatively = () => Capacitor.getPlatform() === 'ios' && Capacitor.isPluginAvailable('RoomScan');
export async function scanNativeRoom(): Promise<NativeRoom> {
  if (!canScanNatively()) throw new Error('Live spatial scanning requires the installed iPhone app.');
  return plugin.scan();
}