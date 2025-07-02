import { FC } from 'react';
import {
  CommunityIcon,
  GriefingIcon,
  ServerRulesIcon,
  TradingIcon
} from './RuleIcons';

export interface Rule {
  id: number;
  title: string;
  icon: FC;
  content: string[];
}

export const RULES_DATA = [
  {
    id: 1,
    title: 'Community Guidelines',
    icon: CommunityIcon,
    content: [
      'Be respectful to all players',
      'No hate speech or discrimination',
      'Keep chat family-friendly',
      'Help new players when possible',
      'Use appropriate usernames and skins'
    ]
  },
  {
    id: 2,
    title: 'Building & Griefing',
    icon: GriefingIcon,
    content: [
      'No griefing or stealing',
      'Respect other players\' builds',
      'Build at least 100 blocks away from others',
      'Clean up floating trees and creeper holes',
      'Ask permission before building near others'
    ]
  },
  {
    id: 3,
    title: 'Server Rules',
    icon: ServerRulesIcon,
    content: [
      'No hacked clients or cheats',
      'No exploiting bugs or glitches',
      'No AFK machines or farms',
      'Follow staff instructions immediately',
      'Report rule violations to moderators'
    ]
  },
  {
    id: 4,
    title: 'Trading & Economy',
    icon: TradingIcon,
    content: [
      'Fair trading practices only',
      'No scamming other players',
      'Report unfair trades to staff',
      'Use designated shopping areas',
      'Honor all trade agreements'
    ]
  }
] satisfies Rule[];