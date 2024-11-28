import { ImageList, ImageListItem, Stack } from '@mui/material';
import { useRecordContext } from 'react-admin';

const DriveSpeedField = () => {
  const speedColor = (speed) => {
    if (speed === 0) return 'linear-gradient(to top, #4A4F4BFF, #747B75FF)';

    if (speed <= 30) return 'linear-gradient(to top, #0C2F47FF, #14476CFF)';
    if (speed >= 60) return 'linear-gradient(to top, #7E4016FF, #A56439FF)';

    return 'linear-gradient(to top, #0E4A27FF, #197E43FF)';
  };
  const record = useRecordContext();
  const speeds = record.speeds;

  return record ? (
    <Stack direction={'row'}>
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: 12,
          overflow: 'hidden',
        }}
      >
        {speeds.map((speed, index) => {
          const getStyle = speedColor(speed);
          return (
            <div
              key={index}
              style={{
                background: `${getStyle}`,
                width: '2%',
              }}
            />
          );
        })}
      </div>
    </Stack>
  ) : null;
};

export default DriveSpeedField;
