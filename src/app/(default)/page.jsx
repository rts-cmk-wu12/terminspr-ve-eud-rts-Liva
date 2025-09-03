import ActivitiesFetch from "@/components/activities-fetch";

export const metadata = {
  title: "Aktiviteter"
};

function HomePage() {
  return (
    <>
      <ActivitiesFetch />
    </>
  );
}

export default HomePage;