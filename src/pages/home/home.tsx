import styles from './home.css';
import { Button, notification } from 'antd';
import Request from '../../apis/request';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
  getTestData();
}

const getTestData = async () => {
  const request = new Request();
  const result = await request.getData("https://api.tomsawyer2.xyz/api/v1");
  console.log(result);
}

export default function Page() {
  return (
    <div>
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </div>
  );
}
