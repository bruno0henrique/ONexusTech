const connections = [
  'M70 210 C220 125 360 270 520 215 S790 145 1110 245',
  'M130 650 C305 500 460 690 620 520 S850 365 1090 455',
  'M230 125 C360 310 540 350 690 255 S925 255 1135 115',
  'M55 420 C245 370 350 505 505 455 S730 315 965 365',
  'M150 760 C335 690 470 805 610 700 S825 560 1040 635',
];

const dots = [
  [95, 215],
  [245, 155],
  [395, 262],
  [520, 215],
  [770, 164],
  [1020, 230],
  [150, 650],
  [330, 530],
  [620, 520],
  [850, 365],
  [1090, 455],
  [230, 125],
  [690, 255],
  [965, 365],
  [610, 700],
  [1040, 635],
];

export function NeuralBackground() {
  return (
    <div className="neural-backdrop pointer-events-none" aria-hidden="true">
      <div className="neural-light neural-light-one" />
      <div className="neural-light neural-light-two" />
      <svg className="neural-network" viewBox="0 0 1200 900" preserveAspectRatio="none">
        <g className="neural-connection-group">
          {connections.map((connection) => (
            <path key={connection} d={connection} />
          ))}
        </g>
        <g className="neural-dot-group">
          {dots.map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" />
          ))}
        </g>
      </svg>
      <div className="neural-frost" />
    </div>
  );
}
