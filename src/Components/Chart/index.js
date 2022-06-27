import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountry,
  getValue,
  setActiveCountry,
  getMainData,
} from "../../redux/covidStatsSlice";
import NumberFormat from "react-number-format";
import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
} from "@progress/kendo-react-charts";
import "hammerjs";
import "@progress/kendo-theme-default/dist/all.css";
const categories = ["Jan", "Feb", "Mar", "Apr"];

function Charts() {
  const dispatch = useDispatch();
  const Taken_countryGet = useSelector(
    (state) => state.covidStats.Taken_country
  );
  const isLoading = useSelector((state) => state.covidStats.isLoading);
  const activeCountryS = useSelector((state) => state.covidStats.activeCountry);
  const error = useSelector((state) => state.covidStats.error);
  const Sconfirmed = useSelector((state) => state.covidStats.confirmed);
  const Srecovered = useSelector((state) => state.covidStats.recovered);
  const SactiveCase = useSelector((state) => state.covidStats.activeCase);
  const Sdeaths = useSelector((state) => state.covidStats.deaths);
  const getDailyCount = useSelector((state) => state.covidStats.getDailyConts);
  let degerler = [];
  function dataFixed(death,recov,act,conifo){
    console.log(death,recov,act,conifo);
    const yuzde = (big,second) =>{
        return   (second*100)/big;
    }
    degerler.push(yuzde(conifo,conifo));
    degerler.push(yuzde(conifo,recov));
    degerler.push(yuzde(conifo,death));
    degerler.push(yuzde(conifo,act));
    
  }
  dataFixed(Sdeaths,Srecovered,SactiveCase,Sconfirmed);
  const handleChange = (takenParam) => {
    console.log(takenParam);
    if (takenParam == "Global") {
      dispatch(getValue());
    } else {
      dispatch(getValue(takenParam));
    }

    dispatch(setActiveCountry(takenParam));
  };
  useEffect(() => {
    dispatch(getCountry());
    dispatch(getValue());
    dispatch(getMainData());
    dispatch(setActiveCountry("Global"));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error {error}</div>;
  }

  const categories = [];
  const deathCount = [];
  const InfectedCount = [];
  getDailyCount.map((item,item_index) => {
    if(item_index % 5 ==0){
      categories.push(item.reportDate);
      InfectedCount.push(item.totalConfirmed);
      deathCount.push(item.deaths.total);
    }
    
    
  });

  return (
    <div className="row mt-3">
      <div className="col">
        <div className="d-flex justify-content-center">
          <select
            className="form-select w-50"
            aria-label="Default select example"
            onChange={(e) => handleChange(e.target.value)}
          >
            {Taken_countryGet.map((country) => (
              <option
                key={country.name}
                value={country.iso3}
                selected={activeCountryS === country.iso3 ? true : false}
              >
                {country.name}
              </option>
            ))}
            <option value={"Global"}>Global</option>
          </select>
        </div>
        <div className="">
          {activeCountryS === "Global" ? (
            <>
              <Chart>
                <ChartTitle text="Global Stats" />
                <ChartCategoryAxis >
                  <ChartCategoryAxisItem 
                    
                    title={{
                      text: "Time",
                      
                    }}
                    labels={{
                      
                      rotation: -90,
                    }}
                    categories={categories}
                  />
                </ChartCategoryAxis>
                <ChartSeries>
                  <ChartSeriesItem
                    type="line"
                    data={InfectedCount}
                  />
                  <ChartSeriesItem
                    type="line"
                    data={deathCount}
                  />
                  
                </ChartSeries>
              </Chart>
            </>
          ) : (
            <div className="d-flex justify-content-center">
            <div className="chart" style={{ width: "500px", height: "500px" }}>
              <ul className="chart__grid">
                <li className="chart__item morph active" style={{ paddingTop: `${100-degerler[0]}%` }}>
                  <div
                    className="chart__item__inner bg-death"
                    
                  >
                    <span>
                      <NumberFormat
                        value={Sconfirmed}
                        displayType={"text"}
                        thousandSeparator={true}
                      />{" "}
                      Infected People
                    </span>
                  </div>
                </li>
                <li className="chart__item morph active" style={{ paddingTop: `${100-degerler[1]}%` }}>
                  <div
                    className="chart__item__inner bg-infected"
                   
                  >
                    <span>
                      <NumberFormat
                        value={Srecovered}
                        displayType={"text"}
                        thousandSeparator={true}
                      />{" "}
                      Recovered People
                    </span>
                  </div>
                </li>
                <li className="chart__item morph active" style={{ paddingTop: `${100-degerler[2]}%` }}>
                  <div
                    className="chart__item__inner bg-DarkBlue"
                    
                  >
                    <span>
                      <NumberFormat
                        value={Sdeaths}
                        displayType={"text"}
                        thousandSeparator={true}
                      />{" "}
                      Deaths People
                    </span>
                  </div>
                </li>
                <li className="chart__item morph active" style={{ paddingTop: `${100-degerler[3]}%` }}>
                  <div
                    className="chart__item__inner bg-sunny"
                    
                  >
                    <span>
                      <NumberFormat
                        value={SactiveCase}
                        displayType={"text"}
                        thousandSeparator={true}
                      />{" "}
                      Active Case
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Charts;
