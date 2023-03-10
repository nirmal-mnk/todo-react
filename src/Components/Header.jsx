export default function Header() {
  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  const dayOfMonth = today.getDate();
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][today.getDay()];
  return (
    <div className="header">
      <h1>My Day</h1>
      <h4>
        {dayOfWeek}, {month} {dayOfMonth}
      </h4>
    </div>
  );
}
