import styled from "styled-components";
// import { useRecentStays } from "./useRecentStays";
// import { useRecentBookings } from "./useRecentBookings";
// import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../UI/Spinner";
import SalesChart from "./SalesChart";
import DurationChart from "./DuartionChart";
import TodayActivity from "./TodayActivity";
// import { useCabins } from "../cabins/useCabins";

const StyledDashboardLayout = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;

  @media (max-width: 1000px) {
    grid-template-rows: auto auto 34rem 34rem;
  }

  @media (max-width: 750px) {
    grid-template-columns: auto;
  }
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoading1, numDays } = useRecentBookings();
  //   const { confirmedStays, isLoading: isLoading2, numDays } = useRecentStays();
  //   const { cabins, isLoading: isLoading3 } = useCabins();

  //   if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;
  if (isLoading1) return <Spinner />;
  console.log(bookings);
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        // confirmedStays={confirmedStays}
        // numDays={numDays}
        // cabinCount={cabins.length}
      />

      {/* <TodayActivity /> */}
      <TodayActivity />

      <DurationChart confirmedStays={bookings} />

      <div style={{ gridColumn: "1/-1", fontSize: "1.6rem" }}>
        <SalesChart bookings={bookings} numDays={numDays} />
      </div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
