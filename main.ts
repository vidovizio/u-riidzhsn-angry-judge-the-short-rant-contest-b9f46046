import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname } from 'node:path';

const rant = `Coworker sends 'hey' on Slack. The typing dots pulse for twenty minutes. I've watched empires rise and fall. He finally types: 'got the file?' It's pinned in the channel. Since Tuesday. We didn't need a novella, Brian. We needed you to read the channel.`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputFile = `${outputDir}/entry.txt`;

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

writeFileSync(outputFile, rant, 'utf-8');