import {
  Card,
  Grid,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  Title,
  Legend,
  Metric,
  ProgressCircle,
  Flex,
} from "@tremor/react";
import { KpiCard } from "./KpiCard";
import { BarChartGraph } from "./Barchart";
import { AreaChartGraph } from "./Areachart";
import { DonutChartGraph } from "./PieChart";
import { ProgressCircleChart } from "./ProgressCircle";
import { axiosInstance } from "src/api/AxiosConfig";
import { useEffect, useState } from "react";

const valueFormatter = (number) =>
  `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

export function Dashboard() {
  const [totalTask, setTotalTask] = useState(0);
  const [totalCompletedTasks, settotalCompletedTasks] = useState(0);
  const [totalCompletedTasksToday, setTotalCompletedTasksToday] = useState(0);
  const [totalTaskToday, setTotalTaskToday] = useState(0);
  const [progressData, setProgressData] = useState(0);
  const [overdueTask, setOverdueTask] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get("/dashboard/todostats/");
      const totalTaskValue = response.data.total_tasks || 0;
      const totalCompletedTasksValue = response.data.total_completed_tasks || 0;
      const totalTaskTodayValue = response.data.total_task_today || 0;
      const totalCompletedTasksTodayValue =
        response.data.tasks_completed_today || 0;
      const overdueTasks = response.data.overdue_tasks || 0;
      const progress = (totalCompletedTasksToday / totalTaskToday) * 100;

      setTotalTask(totalTaskValue);
      settotalCompletedTasks(totalCompletedTasksValue);
      setTotalCompletedTasksToday(totalCompletedTasksTodayValue);
      setTotalTaskToday(totalTaskTodayValue);
      setProgressData(progress);
      setOverdueTask(overdueTasks);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col p-12">
      <div>
        <Title>Dashboard</Title>
        <Text>All of your progress will be shown right here.</Text>
      </div>

      <div>
        <TabGroup className="mt-6">
          <TabList>
            <Tab>Weekly</Tab>
            <Tab>Overview</Tab>
          </TabList>
          <TabPanels>
            {/*Weekly Tab*/}
            <TabPanel>
              <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
                <Card>
                  <Title>Highlights vs. last week</Title>
                  <br />
                  <KpiCard />
                  <br />
                  <Title>Last week progress rate</Title>
                  <br />
                  <ProgressCircleChart />
                  <Legend
                    className="mt-3 mx-auto w-1/2"
                    categories={["Completed Tasks"]}
                    colors={["indigo"]}
                  ></Legend>
                </Card>
                <Card>
                  <BarChartGraph />
                </Card>
                <Card>
                  <AreaChartGraph />
                </Card>
              </Grid>
            </TabPanel>
            {/*Overview Tab*/}
            <TabPanel>
              <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
                <Card>
                  <Title className="mx-auto">Overview</Title>
                  <Card
                    className="max-w-xs mx-auto"
                    decoration="top"
                    decorationColor="yellow"
                  >
                    <Text>Total tasks</Text>
                    <Metric>{totalTask}</Metric>
                  </Card>
                  <br></br>
                  <Card
                    className="max-w-xs mx-auto"
                    decoration="top"
                    decorationColor="rose"
                  >
                    <Text>Total completed tasks</Text>
                    <Metric>{totalCompletedTasks}</Metric>
                  </Card>
                  <br></br>
                  <Card
                    className="max-w-xs mx-auto"
                    decoration="top"
                    decorationColor="pink"
                  >
                    <Text>Overdue tasks</Text>
                    <Metric>{overdueTask}</Metric>
                  </Card>
                  <br></br>
                </Card>
                {/*Pie chart graph*/}
                <Card className="mx-auto h-full">
                  <Title>Overall completion rate</Title>
                  <DonutChartGraph />
                  <br />
                  <Legend
                    className="mt-3 mx-auto w-1/2"
                    categories={["Completed Task", "Total Task"]}
                    colors={["rose", "yellow"]}
                  />
                </Card>
                {/*Progress circle graph*/}

                <Card className="max-w-lg mx-auto">
                  <Title>Today's progress</Title>
                  <br />
                  <Flex className="flex-col items-center">
                    <ProgressCircle
                      className="mt-6"
                      value={
                        isNaN(progressData) || !isFinite(progressData)
                          ? 0
                          : `${progressData.toFixed(0)}%`
                      }
                      size={200}
                      strokeWidth={10}
                      radius={60}
                      color="rose"
                    >
                      <span className="h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center text-sm text-rose-500 font-medium">
                        {isNaN(progressData) || !isFinite(progressData)
                          ? "0%"
                          : `${progressData.toFixed(0)}%`}
                      </span>
                    </ProgressCircle>
                    <br></br>
                    <Legend
                      className="mt-3 mx-auto w-1/2"
                      categories={["Completed Tasks"]}
                      colors={["rose"]}
                    ></Legend>
                  </Flex>
                </Card>
              </Grid>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
