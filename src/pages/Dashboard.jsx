import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertActivity from "../components/AlertActivity";
import Button from "../components/Button";
import CardActivity from "../components/CardActivity";
import ConfirmationPopup from "../components/ConfirmationPopup";
import Header from "../components/Header";
import ActivityService from "../services/activity";

const Dashboard = () => {
  const [activity, setActivity] = useState([]);
  const [confirmationPopup, setConfirmationPopup] = useState(false);
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();

  //Handle fetching get List Activity
  const loadActivity = async () => {
    const activityList = await ActivityService.getActivity();
    setActivity(activityList);
  };

  //Handle Create Activity
  const onCreateActivity = async () => {
    setLoading(true);
    const email = process.env.REACT_APP_EMAIL;
    const title = "New Activity";
    const comment = new Date();
    await ActivityService.createActivity(comment, email, title);
    setLoading(false);
    loadActivity();
  };

  //Handling delete icon in Card Activity
  const onDeleteConfirmation = (id, title) => {
    setDetail([id, title]);
    setConfirmationPopup(true);
  };

  const Cardhandler = (id) => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    loadActivity();
  }, [detail]);
  return (
    <div className="relative h-full w-full">
      <ConfirmationPopup
        open={confirmationPopup}
        setOpen={setConfirmationPopup}
        selectedActivity={detail}
        refresh={loadActivity}
        setConfirmationPopup={setAlert}
        page="dashboard"
      />
      {alert && (
        <AlertActivity alertComponent={alert} setAlertComponent={setAlert} />
      )}

      {/* Header */}
      <Header />
      <main className="h-full px-[8%] pt-[43px] md:px-[13%] xl:px-[8%]">
        {/* Title Button */}
        <section>
          <div className="flex justify-between">
            <p
              data-cy="activity-title"
              className="text-base font-bold text-txtBlack md:text-4xl"
            >
              Activity
            </p>
            <Button
              dataCy="activity-add-button"
              type="tambah"
              onClick={onCreateActivity}
              loadingComponent={loading}
            />
          </div>
        </section>
        {/* Component for empty activity */}
        {activity.length <= 0 && (
          <div className=" mb-24">
            <img
              data-cy="activity-empty-state"
              onClick={onCreateActivity}
              width={767}
              height={490}
              className="m-auto flex-1 object-contain"
              src={require("../assets/activity-empty-state.png")}
              alt="emptyActivity"
            />
          </div>
        )}
        {/* Card Activity */}
        <section className="mt-[37px] grid h-full w-full grid-cols-2 gap-y-[20px] sm:grid-cols-3 md:mt-[49px] md:grid-cols-2 md:gap-y-[26px] lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {activity?.map((item) => (
            <CardActivity
              dataCy="activity-item"
              onClickCard={Cardhandler}
              key={item.id}
              id={item.id}
              title={item.title}
              created={item.created_at}
              alertComponent={setAlert}
              onDelete={() => onDeleteConfirmation(item.id, item.title)}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
