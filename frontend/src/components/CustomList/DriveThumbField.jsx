import { ImageList, ImageListItem, Stack } from '@mui/material';
import { useRecordContext } from 'react-admin';

const DriveThumbField = ({ col }) => {
  const record = useRecordContext();
  const images = record.timeline_pics;
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
      <ImageList
        sx={{
          width: '100%',
          height: 20,
          margin: 0,
        }}
        variant="standard"
        cols={col}
      >
        {images.map((item, index) => (
          <ImageListItem
            key={index}
            sx={{
              overflow: 'hidden',
              '& .MuiImageListItem-img': {
                height: '100%',
              },
            }}
          >
            <img src={item} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  ) : null;
};

export default DriveThumbField;
