import { Card, CardContent, CardHeader } from "@material-ui/core";

const Dashboard = () => (
  <Card>
    <CardHeader title="Welcome to the Admin Dashboard" />
    <CardContent>
      <div>
        <h2>Quick Statistics</h2>
        {/* Thêm các thành phần thống kê hoặc dữ liệu tại đây */}
        <p>Total Users: 150</p>
        <p>Total Posts: 200</p>
        <p>Monthly Revenue: $5000</p>
      </div>
      <div>
        <h2>Recent Activities</h2>
        {/* Thêm các thành phần để hiển thị hoạt động gần đây */}
        <ul>
          <li>User John Doe posted a new article.</li>
          <li>Mary updated her profile.</li>
          <li>New order #12345 has been placed.</li>
        </ul>
      </div>
    </CardContent>
  </Card>
);

export default Dashboard;
