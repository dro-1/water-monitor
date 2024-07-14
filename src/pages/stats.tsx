import pentagon from "@/assets/svg/pentagon.svg";
import dashboard from "@/assets/svg/dashboard.svg";
import sensor from "@/assets/svg/sensor.svg";
import visuals from "@/assets/svg/visuals.svg";
import dashboardActive from "@/assets/svg/dashboard-active.svg";
import sensorActive from "@/assets/svg/sensor-active.svg";
import visualsActive from "@/assets/svg/visuals-active.svg";
import caretDown from "@/assets/svg/caret-down.svg";
import search from "@/assets/svg/search.svg";
import logout from "@/assets/svg/logout.svg";
import grid from "@/assets/svg/grid.svg";
import bell from "@/assets/svg/bell.svg";

import avatar from "@/assets/png/avatar.png";
import abacus from "@/assets/png/abacus.png";

import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

type UrlLink = {
  activeIcon: string;
  inactiveIcon: string;
  text: string;
  url: string;
};

const mainUrls: UrlLink[] = [
  {
    text: "Dashboard",
    url: "/",
    activeIcon: dashboardActive,
    inactiveIcon: dashboard,
  },
  {
    text: "Sensor Management",
    url: "/management",
    activeIcon: sensorActive,
    inactiveIcon: sensor,
  },
  {
    text: "Visualizations",
    url: "/visuals",
    activeIcon: visualsActive,
    inactiveIcon: visuals,
  },
];

const chartData = [
  { month: "January", desktop: 0.2 },
  { month: "February", desktop: 0.1 },
  { month: "March", desktop: 0.15 },
  { month: "April", desktop: 0.4 },
  { month: "May", desktop: 0.6 },
  { month: "June", desktop: 0.45 },
];

const chartConfig = {
  desktop: {
    label: "Level",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

type NotificationItem = {
  time: string;
  date: string;
  bgColor: string;
  title: string;
  subtitle: string;
};

const notificationItems: NotificationItem[] = [
  {
    time: "10:00",
    date: "20th June 2024",
    bgColor: "bg-[#FF3B30]",
    subtitle: "Alkaline",
    title: "pH level is high",
  },
  {
    time: "08:03",
    date: "19th June 2024",
    bgColor: "bg-[#FF9500]",
    subtitle: "21°C",
    title: "Temperature is warm",
  },
  {
    time: "22:05",
    date: "12th April 2024",
    bgColor: "bg-[#34C759]",
    subtitle: "20mg/L",
    title: "TDS is normal",
  },
  {
    time: "11:40",
    date: "11th February 2024",
    bgColor: "bg-[#FF9500]",
    subtitle: "4 NTU",
    title: "Turbidity",
  },
  {
    time: "14:45",
    date: "6th February 2024",
    bgColor: "bg-[#34C759]",
    subtitle: "7mg/L",
    title: "Dissolved Oxygen is normal",
  },
];

export const Stats = () => {
  return (
    <div className="bg-[#FDFDFD]">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="p-5">
          <h1 className="flex items-center font-medium text-2xl mb-1">
            Water Set <img src={abacus} className="inline-block ml-2" />
          </h1>
          <h3 className="text-sSecondary font-medium text-sm mb-5">
            Analyze your sensor data
          </h3>
          <div className="flex ">
            <div className="mr-4">
              <MainStats />
              <MinorStats />
              <DissolvedOxygen />
            </div>
            <div className="p-6 shadow-stat rounded-lg mr-2 w-[450px]">
              <div className="flex justify-between items-center mb-4">
                <div className="flex flex-col">
                  <h2 className="font-medium text-lg">Notifications</h2>
                  <em className="not-italic font-medium text-sm text-secondary">
                    Monitors sensors
                  </em>
                </div>
                <img src={bell} />
              </div>
              <div className="space-y-2">
                {notificationItems.map((notificationItem, idx) => (
                  <NotificationItemCard item={notificationItem} key={idx} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export const NotificationItemCard: React.FC<{ item: NotificationItem }> = ({
  item,
}) => {
  const { bgColor, date, subtitle, time, title } = item;

  return (
    <div className="flex">
      <div className="mr-2 flex flex-col w-[120px]">
        <em className="not-italic text-xs text-secondary">{time}</em>
        <em className="not-italic text-xs text-secondary">{date}</em>
      </div>
      <div
        className={clsx("p-4 rounded-lg text-[#FDFDFD] flex flex-col", bgColor)}
      >
        <em className="not-italic font-medium text-sm">{title}</em>
        <em className="not-italic text-xs">{subtitle}</em>
      </div>
    </div>
  );
};

const MainStats = () => {
  return (
    <div className="flex flex-wrap">
      <div className="shadow-stat p-4 flex flex-col justify-center items-center rounded-lg w-[200px]">
        <h3 className="mb-2 font-medium text-sm">Temperature</h3>
        <em className="not-italic font-medium text-2xl text-sPrimary">
          21&deg;C
        </em>
      </div>
      <div className="shadow-stat p-4 flex flex-col justify-center items-center rounded-lg w-[200px]">
        <h3 className="mb-2 font-medium text-sm">Turbidity</h3>
        <em className="not-italic font-medium text-2xl text-sPrimary">4 NTU</em>
      </div>
      <div className="shadow-stat p-4 flex flex-col justify-center items-center rounded-lg w-[200px]">
        <h3 className="mb-2 font-medium text-sm">Conductivity</h3>
        <em className="not-italic font-medium text-2xl text-sPrimary">
          100uS/cm
        </em>
      </div>
      <div className="shadow-stat p-4 flex flex-col justify-center items-center rounded-lg w-[200px]">
        <h3 className="mb-2 font-medium text-sm">Nitrate</h3>
        <em className="not-italic font-medium text-2xl text-sPrimary">
          51% NO<sub>3</sub>
        </em>
      </div>
      <div className="shadow-stat p-4 flex flex-col justify-center items-center rounded-lg w-[200px]">
        <h3 className="mb-2 font-medium text-sm">Phosphate</h3>
        <em className="not-italic font-medium text-2xl text-sPrimary">
          51% PO<sub>4</sub>
        </em>
      </div>
    </div>
  );
};

const MinorStats = () => {
  return (
    <div className="flex">
      <div className="p-6 shadow-stat rounded-lg w-[300px] mr-2">
        <div className="flex justify-between items-center">
          <h2 className="font-medium text-lg">Coliform Bacteria</h2>
          <img src={grid} />
        </div>
        <div>
          <em className="not-italic font-medium text-sSecondary">
            Water Limit:
          </em>
          <em className="not-italic inline-block ml-2 font-medium text-lg text-sPrimary">
            100 mL
          </em>
        </div>
        <div>
          <em className="not-italic font-medium text-sSecondary">
            Value Present:
          </em>
          <em className="not-italic inline-block ml-2 font-medium text-lg text-sPrimary">
            1 CFU/100mL
          </em>
        </div>
      </div>
      <div className="p-6 shadow-stat rounded-lg  grow">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-lg">pH Level</h3>
          <div>
            <em className="not-italic text-sPrimary font-medium text-lg mr-4">
              Alkaline
            </em>
            <Switch className="data-[state=checked]:bg-sPrimary" checked />
          </div>
        </div>
        <div>
          <em className="not-italic font-medium text-sSecondary">
            Amount of Water:
          </em>
          <em className="not-italic inline-block ml-2 font-medium text-lg text-ssPrimary">
            100mL
          </em>
        </div>
        <Progress className="h-2 my-4 bg-primary/[0.2]" value={73} />
      </div>
    </div>
  );
};

const DissolvedOxygen = () => {
  return (
    <div className="p-6 shadow-stat rounded-lg mr-2 w-full">
      <div className="flex justify-between items-center">
        <div className=" flex flex-col">
          <h2 className="font-medium text-lg">Dissolved Oxygen</h2>
          <div>
            <em className="not-italic text-sm font-medium text-sSecondary">
              Average Dissolved Oxygen Per Day:
            </em>
            <em className="not-italic inline-block ml-2 font-medium text-lg text-sPrimary">
              7 mg/L
            </em>
          </div>
        </div>

        <div>
          <em className="not-italic text-sPrimary font-medium text-lg mr-4">
            Critical
          </em>
          <Switch className="data-[state=checked]:bg-sPrimary" checked />
        </div>
      </div>
      <div>
        <ChartContainer config={chartConfig} className="h-[200px] my-4 w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <aside className=" w-[300px] p-[30px] ">
      <nav className="flex flex-col min-h-[calc(100vh-186px)]">
        <ul className="space-y-2">
          {mainUrls.map((mainUrl, idx) => (
            <li
              key={idx}
              className="flex transition items-center p-4 rounded-lg"
            >
              <NavLink
                to={mainUrl.url}
                className={({ isActive }) =>
                  clsx(
                    "font-medium text-sm flex items-center cursor-pointer hover:text-sPrimary/[.8]",
                    isActive && "text-sPrimary",
                    !isActive && "text-sSecondary"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={isActive ? mainUrl.activeIcon : mainUrl.inactiveIcon}
                      className="mr-4"
                    />
                    {mainUrl.text}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="grow" />
        <div className="p-4">
          <button
            className={clsx(
              "font-medium text-sm flex items-center text-sSecondary"
            )}
          >
            <img src={logout} className="mr-4" />
            Log out
          </button>
        </div>
      </nav>
    </aside>
  );
};

const Navbar = () => {
  return (
    <header className="p-[30px] flex justify-between items-center">
      <div className="flex items-center">
        <div className="bg-sPrimary w-10 h-10 rounded-lg flex justify-center items-center mr-[10px]">
          <img src={pentagon} />
        </div>
        <div className="mr-[65px]">
          <h3 className="font-medium text-sm text-sPrimary">
            Standard account
          </h3>
          <h5 className="text-sSecondary text-xs">example@gmail.com</h5>
        </div>
        <img src={caretDown} />
      </div>
      <div className="flex border border-[#ccc] focus:border-sPrimary rounded-xl p-2 px-4 w-[400px]">
        <img src={search} className="block" />
        <input
          className="p-3 rounded-xl grow outline-none"
          type="text"
          placeholder="Search quantity control, regulators..."
        />
      </div>
      <div className="space-x-3 flex items-center">
        <div className="w-20 h-9 rounded-full bg-sPrimary/[.1] flex justify-center items-center">
          <em className="not-italic font-medium text-sm text-sPrimary">
            Admin
          </em>
        </div>
        <img src={avatar} />
        <img src={caretDown} />
      </div>
    </header>
  );
};
