import { Box, ImageList, ImageListItem, Stack } from '@mui/material';
import { useRecordContext } from 'react-admin';

const DriveThumbField = ({ col }) => {
  const record = useRecordContext();
  const image = record.timeline_pic;
  return record ? (
    <Stack
      direction={'row'}
      sx={{
        padding: 0,
        width: '100%',
        '& .MuiImageList-standard': {
          gap: '0!important',
        },
      }}
    >
      <Box
        component={'img'}
        src={image}
        sx={{ width: '100%', height: 20, margin: 0 }}
      />
    </Stack>
  ) : null;
};

export default DriveThumbField;
