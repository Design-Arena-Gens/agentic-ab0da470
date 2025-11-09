"use client";

import { CalculatorCard } from "./components/CalculatorCard";

const workUnits = [
  { quantity: "Work (SI)", unit: "joule", symbol: "J", relation: "1 J = 1 N*m" },
  { quantity: "Force (SI)", unit: "newton", symbol: "N", relation: "1 N = 1 kg*m/s^2" },
  { quantity: "Distance", unit: "metre", symbol: "m", relation: "Base unit of length" },
  { quantity: "Work (larger)", unit: "kilojoule", symbol: "kJ", relation: "1 kJ = 1000 J" },
  { quantity: "Work (very large)", unit: "megajoule", symbol: "MJ", relation: "1 MJ = 10^6 J" },
  { quantity: "Force (imperial)", unit: "pound-force", symbol: "lbf", relation: "1 lbf ~= 4.448 N" },
];

export default function Page() {
  return (
    <div>
      <section className="section-card">
        <h2>Work and Force</h2>
        <p>
          <strong>Work</strong> in physics measures how much energy is transferred when a force causes a displacement. If a
          constant force <em>F</em> moves an object through a displacement <em>d</em> at an angle <em>theta</em>, the work done is
          <strong> W = F * d * cos(theta)</strong>. Only the component of the force in the direction of motion contributes to work.
        </p>
        <div className="content-grid">
          <div className="keypoint">
            <strong>Positive work</strong> happens when force and displacement point the same way, adding energy to the object.
          </div>
          <div className="keypoint">
            <strong>Negative work</strong> occurs when they oppose each other (friction, braking), removing energy.
          </div>
          <div className="keypoint">
            <strong>Zero work</strong> occurs if the force is perpendicular to motion (e.g., centripetal force in circular motion).
          </div>
        </div>
        <p>
          The <strong>unit of work</strong> in the SI system is the <em>joule (J)</em>. One joule is the work done by a one-newton
          force moving an object one metre. The related unit of force is the <em>newton (N)</em>, equal to the force that gives a
          one kilogram mass an acceleration of one metre per second squared.
        </p>
        <table className="definition-table">
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Symbol</th>
              <th>Relation</th>
            </tr>
          </thead>
          <tbody>
            {workUnits.map((item) => (
              <tr key={item.unit}>
                <td>{item.quantity}</td>
                <td>{item.unit}</td>
                <td>{item.symbol}</td>
                <td>{item.relation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="section-card">
        <h2>Simple Machines Make Work Easier</h2>
        <p>
          A <strong>simple machine</strong> changes the magnitude or direction of an applied force, making tasks easier even though the
          total work (in an ideal system) stays the same. They trade force for distance or vice versa. Examples include the lever,
          inclined plane, pulley, wheel and axle, wedge, and screw.
        </p>
        <h3>Lever Example</h3>
        <p>
          A lever pivots around a fulcrum. By placing the fulcrum closer to the load, a smaller input force can lift a heavier weight.
          The mechanical advantage is the ratio of the <em>effort arm</em> to the <em>load arm</em>. For instance, using a crowbar to lift a
          rock allows you to apply modest force over a long distance to raise a heavy object over a short distance.
        </p>
        <h3>Why Mountain Roads Are Winding</h3>
        <p>
          Mountain roads use the principle of the <strong>inclined plane</strong>. Rather than going straight up a steep slope (which requires
          enormous force), the road winds, increasing the distance traveled while reducing the required climbing force. Vehicles can
          therefore climb using less engine power and without overheating, even though the total work against gravity is the same.
        </p>
      </section>

      <section className="section-card">
        <h2>Energy and Power</h2>
        <p>
          <strong>Energy</strong> is the capacity to do work. It comes in many forms such as kinetic, potential, thermal, and chemical.
          <strong>Power</strong> tells how quickly work is done or energy is transferred. Power is the rate of energy change.
        </p>
        <div className="content-grid">
          <div className="keypoint">
            <strong>Energy formula (kinetic)</strong>: <em>E<sub>k</sub> = 1/2 * m * v^2</em>, where <em>m</em> is mass and <em>v</em> is speed.
          </div>
          <div className="keypoint">
            <strong>Energy formula (gravitational)</strong>: <em>E<sub>p</sub> = m * g * h</em>, with <em>g</em> about 9.81 m/s^2.
          </div>
          <div className="keypoint">
            <strong>Power</strong>: <em>P = W / t = delta E / t</em>, measured in watts (W). One watt equals one joule per second.
          </div>
        </div>
        <p>
          Example: A 60 W light bulb converts electrical energy to light and heat at a rate of 60 joules every second. Running it for one
          hour consumes <em>60 J/s * 3600 s = 216,000 J</em>, or 0.06 kilowatt-hours (kWh).
        </p>
        <h3>Power Rating</h3>
        <p>
          The <strong>power rating</strong> printed on appliances shows the maximum power they draw. A 2000 W electric iron consumes energy
          faster than a 750 W microwave. When selecting appliances, this rating helps estimate electricity costs and choose appropriate
          wiring that can handle the load.
        </p>
      </section>

      <CalculatorCard
        title="Work Done Calculator"
        description="Compute the work done by a constant force over a displacement using W = F * d * cos(theta)."
        inputFields={[
          {
            id: "force",
            label: "Applied force",
            placeholder: "e.g. 150",
            unit: "newtons (N)",
          },
          {
            id: "distance",
            label: "Displacement",
            placeholder: "e.g. 12",
            unit: "metres (m)",
          },
          {
            id: "angle",
            label: "Angle between force and motion",
            placeholder: "e.g. 20",
            unit: "degrees",
          },
        ]}
        unitLabel="joules (J)"
        compute={(values) => {
          const { force, distance, angle } = values;
          const theta = (angle * Math.PI) / 180;
          return force * distance * Math.cos(theta);
        }}
        explanation={
          <p>
            Example: Pushing a crate with 200 N at 30 degrees over 5 m gives <em>W = 200 * 5 * cos(30 deg) ~= 866 J</em> of work.
          </p>
        }
      />

      <CalculatorCard
        title="Kinetic Energy Calculator"
        description="Estimate the kinetic energy of a moving object using E = 1/2 * m * v^2."
        inputFields={[
          {
            id: "mass",
            label: "Mass",
            placeholder: "e.g. 75",
            unit: "kilograms (kg)",
          },
          {
            id: "velocity",
            label: "Speed",
            placeholder: "e.g. 4.5",
            unit: "metres/second (m/s)",
          },
        ]}
        unitLabel="joules (J)"
        compute={(values) => 0.5 * values.mass * values.velocity ** 2}
        explanation={
          <p>
            Example: A 1200 kg car moving at 15 m/s has <em>1/2 * 1200 * 15^2 ~= 135,000 J</em> of kinetic energy.
          </p>
        }
      />

      <CalculatorCard
        title="Power Output Calculator"
        description="Find power using the ratio of work or energy to time, P = W / t."
        inputFields={[
          {
            id: "energy",
            label: "Energy or work",
            placeholder: "e.g. 1500",
            unit: "joules (J)",
          },
          {
            id: "time",
            label: "Time interval",
            placeholder: "e.g. 20",
            unit: "seconds (s)",
          },
        ]}
        unitLabel="watts (W)"
        compute={(values) => (values.time === 0 ? NaN : values.energy / values.time)}
        explanation={
          <p>
            Example: If a motor does 10,000 J of work in 25 s, the power is <em>10,000 / 25 = 400 W</em>.
          </p>
        }
      />

      <CalculatorCard
        title="Electricity Bill Estimator"
        description="Calculate energy consumption, convert to the commercial unit (kWh), and estimate cost."
        inputFields={[
          {
            id: "powerRating",
            label: "Appliance power rating",
            placeholder: "e.g. 1200",
            unit: "watts (W)",
          },
          {
            id: "hoursPerDay",
            label: "Hours used per day",
            placeholder: "e.g. 3",
            unit: "hours",
          },
          {
            id: "days",
            label: "Number of days",
            placeholder: "e.g. 30",
            unit: "days",
          },
          {
            id: "tariff",
            label: "Electricity tariff",
            placeholder: "e.g. 0.12",
            unit: "currency per kWh",
          },
        ]}
        unitLabel=""
        compute={(values) => {
          const energyKWh = (values.powerRating * values.hoursPerDay * values.days) / 1000;
          const cost = energyKWh * values.tariff;
          return { energyKWh, cost };
        }}
        renderResult={(result) => {
          if (typeof result === "number") {
            return <p>{result.toLocaleString()} kWh</p>;
          }
          const energy = result.energyKWh ?? 0;
          const cost = result.cost ?? 0;
          return (
            <div>
              <p>
                Total energy: <strong>{energy.toFixed(2)} kWh</strong>
              </p>
              <p>
                Estimated cost: <strong>{cost.toFixed(2)}</strong>
              </p>
            </div>
          );
        }}
        explanation={
          <div>
            <p>
              The <strong>commercial unit of energy</strong> used on bills is the kilowatt-hour (kWh). One kWh equals the energy
              consumed by a 1 kW appliance running for one hour. Electricity cost = energy used in kWh * tariff per kWh.
            </p>
            <p>
              Example: A 1500 W heater running 2 h per day for 30 days uses <em>1.5 kW * 2 * 30 = 90 kWh</em>. At $0.18/kWh, the bill
              contribution is <em>90 * 0.18 = $16.20</em>.
            </p>
          </div>
        }
      />

      <section className="section-card">
        <h2>Commercial Units and Electricity Bills</h2>
        <p>
          Power companies track energy in <strong>kilowatt-hours (kWh)</strong>. To compute a bill, multiply your appliance power rating (in
          kW) by the number of hours it runs to get kWh, then by the tariff. Demand charges may add fees for high peak power usage, and taxes
          or service fees are often applied afterward.
        </p>
        <div className="faq">
          <div className="faq-item">
            <h4>What is a commercial unit of power?</h4>
            <p>
              Utilities commonly express larger power demands in <strong>kilowatts (kW)</strong> or <strong>megawatts (MW)</strong>. For energy consumption
              they use <strong>kilowatt-hours</strong>. Dividing total kWh by time gives the average power drawn during that period.
            </p>
          </div>
          <div className="faq-item">
            <h4>How does power relate to work and energy?</h4>
            <p>
              Power is the rate at which work is done. A higher power rating means the appliance converts energy faster, making tasks quicker but
              potentially increasing total energy use if operated for the same duration.
            </p>
          </div>
          <div className="faq-item">
            <h4>Can simple machines change total work?</h4>
            <p>
              In an ideal, frictionless world they cannot - work input equals work output. In real life some energy is lost to friction, but the
              reduced force requirement still makes tasks manageable and safer.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
