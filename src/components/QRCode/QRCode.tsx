import styles from './QRCode.less';
import qrcode from 'qrcode';
import { useEffect, useState } from 'react';

const getQRCode = async (anchor: string) => {
  const url = window.location.href + encodeURIComponent(anchor);
  const result = await qrcode.toDataURL(url, {
    color: {
      light: '#ffffff00',
    },
  });

  return result;
};

interface QRCodeProps {
  anchor: string;
}

const QRCode: React.FC<QRCodeProps> = (props) => {
  const [imgUrl, setImgUrl] = useState<string>('');
  useEffect(() => {
    const fetchQRCode = async () => {
      const result = await getQRCode(props.anchor);
      setImgUrl(result);
    };
    fetchQRCode();
  }, []);

  return (
    <div
      className={styles.QRCode}
      onClick={(e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
      }}
    >
      <img src={imgUrl} />
    </div>
  );
};

export default QRCode;
