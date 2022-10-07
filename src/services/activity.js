import axios from "axios";

class ActivityService {
  http = axios.create({
    baseURL: process.env.REACT_APP_API,
  });

  async getActivity() {
    const email = process.env.REACT_APP_EMAIL;
    const response = await this.http.get(`/activity-groups?email=${email}`);
    return response.data.data;
  }

  async getDetailActivity(id) {
    const response = await this.http.get(`activity-groups/${id}`);
    return response.data;
  }

  async createActivity(comment, email, title) {
    const response = await this.http.post("/activity-groups", {
      title,
      email,
      comment,
    });
    return response.data;
  }

  async updateActivity(activity_group_id, title) {
    const response = await this.http.patch(
      `activity-groups/${activity_group_id}`,
      {
        title,
      }
    );
    return response.data;
  }

  async deleteActivity(id) {
    const response = await this.http.delete(`/activity-groups/${id}`);
    return response.data;
  }
}

export default new ActivityService();
