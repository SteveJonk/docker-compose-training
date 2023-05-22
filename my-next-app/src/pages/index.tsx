export default function Home({ message }: any) {
  return <main>Meeessage: {message}</main>;
}

export const getServerSideProps = async () => {
  try {
    const response = await fetch('http://node-api:3000/api/');
    const data = await response.json();
    return {
      props: {
        message: data?.message,
      },
    };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
};
