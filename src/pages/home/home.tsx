import styles from './home.css';
import { Button, notification } from 'antd';
import Request from '../../apis/request';
import MainArticles from '@/components/MainArticles';
import NavigationBar from '@/components/NavigationBar';

// const openNotification = () => {
//   notification.open({
//     message: 'Notification Title',
//     description:
//       'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
//     onClick: () => {
//       console.log('Notification Clicked!');
//     },
//   });
//   getTestData();
// }

// const getTestData = async () => {
//   const request = new Request();
//   const result = await request.getData("https://api.tomsawyer2.xyz/api/v1");
//   console.log(result);
// }

// export default function Page() {
//   return (
//     <div>
//       <Button type="primary" onClick={openNotification}>
//         Open the notification box
//       </Button>
//     </div>
//   );
// }

const Page: React.FC<any> = () => {
  return (
    <>
      <NavigationBar offsetTop={1000000} tab={2} />
      <MainArticles />
    </>
  );
};

export default Page;
