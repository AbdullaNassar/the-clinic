import styled from "styled-components";

import Heading from "../../UI/Heading";
import Row from "../../UI/Row";

import Spinner from "../../UI/Spinner";
import { useTodayActivity } from "../Booking/useTodayActivity";
import TodayItem from "./TodayItem";
// import TodayItem from "./TodayItem";

const StyledToday = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / span 2;
  padding-top: 2.4rem;
  overflow: scroll;
  width: 50rem;

  @media (max-width: 1000px) {
    width: 90%;
  }
  /* overflow-x: hidden; */
`;

const TodayList = styled.ul`
  /* overflow: scroll;
  overflow-x: hidden; */

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;

  @media (max-width: 1000px) {
    grid-row: 3/4;
    grid-column: 1/2;
  }
`;

function TodayActivity() {
  const { activities, isLoading } = useTodayActivity();
  console.log(activities);

  return (
    <StyledToday>
      <Row type="horizontal">
        <Heading as="h2">اليوم</Heading>
      </Row>

      {!isLoading ? (
        activities?.length > 0 ? (
          <TodayList>
            {activities.map((activity) => (
              <TodayItem activity={activity} key={activity.id} />
            ))}
          </TodayList>
        ) : (
          <NoActivity>لا توجد حجوزات اليوم...</NoActivity>
        )
      ) : (
        <Spinner />
      )}
    </StyledToday>
  );
}

export default TodayActivity;
