import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getValue } from "../../redux/covidStatsSlice";
import AnimatedNumbers from "react-animated-numbers";
import Moment from 'moment';

function Banner() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.covidStats.isLoading);
  const error = useSelector((state) => state.covidStats.error);
  /*
  confirmed:0,
            recovered:0,
            deaths:0,
            lastupdate : "",
             */
  const Sconfirmed = useSelector((state) => state.covidStats.confirmed);
  const Srecovered = useSelector((state) => state.covidStats.recovered);
  const SactiveCase = useSelector((state) => state.covidStats.activeCase);
  const Sdeaths = useSelector((state) => state.covidStats.deaths);
  const Slastupdate = useSelector((state) => state.covidStats.lastupdate);
  useEffect(() => {
    dispatch(getValue());
  }, []);
  return (
    <div className="row">
      <div className="row">
        <div className="col">
          {/* card başlangıcı */}
          <div className="card text-light bg-death">
            <div className="card-body">
              <h5 className="card-title">Infected</h5>
              <h6 className="card-subtitle mb-2 text-light">
                
              <AnimatedNumbers
                  includeComma
                  animateToNumber={Sconfirmed}
                  fontStyle={{ fontSize: 40 }}
                ></AnimatedNumbers>
              </h6>
              <p className="card-text">
               
                {Moment(Slastupdate).format('LLLL')}
              </p>
              <p>Number of infect cases of COVID-19</p>
            </div>
          </div>
          {/* card bitişi */}
        </div>
        <div className="col">
          {/* card başlangıcı */}
          <div className="card text-light bg-infected">
            <div className="card-body">
              <h5 className="card-title">Recovered</h5>
              <h6 className="card-subtitle mb-2 text-light">
              <AnimatedNumbers
                  includeComma
                  animateToNumber={Srecovered}
                  fontStyle={{ fontSize: 40 }}
                ></AnimatedNumbers>
              </h6>
              <p className="card-text">{Moment(Slastupdate).format('LLLL')}</p>
              <p>Number of recovered cases of COVID-19</p>
            </div>
          </div>
          {/* card bitişi */}
        </div>
        <div className="col">
          {/* card başlangıcı */}
          <div className="card text-light bg-DarkBlue">
            <div className="card-body">
              <h5 className="card-title">Deaths</h5>
              <h6 className="card-subtitle mb-2 text-light">
              <AnimatedNumbers
                  includeComma
                  animateToNumber={Sdeaths}
                  fontStyle={{ fontSize: 40 }}
                ></AnimatedNumbers>
              </h6>
              <p className="card-text">{Moment(Slastupdate).format('LLLL')}</p>
              <p>Number of recovered cases of COVID-19</p>
            </div>
          </div>
          {/* card bitişi */}
        </div>
        <div className="col">
          {/* card başlangıcı */}
          <div className="card text-light bg-sunny">
            <div className="card-body">
              <h5 className="card-title">Active</h5>
              <h6 className="card-subtitle mb-2 text-light">
              <AnimatedNumbers
                  includeComma
                  animateToNumber={SactiveCase}
                  fontStyle={{ fontSize: 40 }}
                ></AnimatedNumbers>
                    </h6>
                    <p className="card-text">{Moment(Slastupdate).format('LLLL')}</p>
                    <p>Number of active cases of COVID-19</p>
            </div>
          </div>
          {/* card bitişi */}
        </div>
      </div>
    </div>
  );
}

export default Banner;
