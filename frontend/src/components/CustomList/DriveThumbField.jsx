import { ImageList, ImageListItem, Stack } from '@mui/material';
import { useRecordContext } from 'react-admin';

import imageData1 from '../../assets/output_001.jpg';
import imageData2 from '../../assets/output_002.jpg';
import imageData3 from '../../assets/output_003.jpg';
import imageData4 from '../../assets/output_004.jpg';
import imageData5 from '../../assets/output_005.jpg';
import imageData6 from '../../assets/output_006.jpg';
import imageData7 from '../../assets/output_007.jpg';
import imageData8 from '../../assets/output_008.jpg';
import imageData9 from '../../assets/output_009.jpg';
import imageDat10 from '../../assets/output_010.jpg';
// import data from '../../data.json';

const images = [
  imageData1,
  imageData2,
  imageData3,
  imageData4,
  imageData5,
  imageData6,
  imageData7,
  imageData8,
  imageData9,
  imageDat10,
  imageData1,
  imageData2,
  imageData3,
  imageData4,
  imageData5,
  imageData6,
  imageData7,
  imageData8,
  imageData9,
  imageDat10,
  imageData1,
  imageData2,
  imageData3,
  imageData4,
  imageData5,
  imageData6,
  imageData7,
  imageData8,
  imageData9,
  imageDat10,
  imageData1,
  imageData2,
  imageData3,
  imageData4,
  imageData5,
  imageData6,
  imageData7,
  imageData8,
  imageData9,
  imageDat10,
];

const DriveThumbField = ({ col }) => {
  const record = useRecordContext();
  return record ? (
    <Stack direction={'row'} sx={{ padding: 0 }}>
      <ImageList
        sx={{ width: '100%', height: 20, margin: 0 }}
        variant="standard"
        cols={col}
        rowHeight={15}
      >
        {images.map((item, index) => (
          <ImageListItem key={index}>
            <img src={item} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  ) : null;
};

export default DriveThumbField;
