import { useEffect, useState } from "react";

const announcements = [
  "CUSTOM PRINTING AVAILABLE",
  "NEW DEALS & OFFERS",
  "FREE DELIVERY AVAILABLE",
  "SHOP THE LATEST DROPS",
];

function AnnouncementBar() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((previous) => (previous + 1) % announcements.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="announcement-bar">
      <div className="announcement-inner">
        <span className="announcement-message" key={current}>
          {announcements[current]}
        </span>
      </div>
    </div>
  );
}

export default AnnouncementBar;