import { Box, ImageList, ImageListItem, Stack } from '@mui/material';
import { useRecordContext } from 'react-admin';

const DriveSpeedField = () => {
  const speedColor = (speed) => {
    if (speed === 0) return 'linear-gradient(to top, #58615AFF, #747B75FF)';

    if (speed <= 30) return 'linear-gradient(to top, #153A53FF, #28628CFF)';
    if (speed >= 60) return 'linear-gradient(to top, #88481EFF, #B67951FF)';

    return 'linear-gradient(to top, #175A33FF, #2C9558FF)';
  };
  const record = useRecordContext();
  const speeds = record.speeds;

  return record ? (
    <Stack direction={'row'}>
      <Box
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
            <Box
              key={index}
              style={{
                background: `${getStyle}`,
                width: '2%',
              }}
            />
          );
        })}
      </Box>
    </Stack>
  ) : null;
};

export default DriveSpeedField;
