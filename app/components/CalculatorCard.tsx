"use client";

import { FormEvent, ReactNode, useState } from "react";

type CalculatorComputation = number | Record<string, number>;

interface CalculatorCardProps {
  title: string;
  description: string;
  inputFields: Array<{
    id: string;
    label: string;
    placeholder?: string;
    unit?: string;
  }>;
  compute: (values: Record<string, number>) => CalculatorComputation;
  unitLabel: string;
  formatResult?: (value: CalculatorComputation) => string;
  renderResult?: (value: CalculatorComputation) => ReactNode;
  explanation?: ReactNode;
}

export function CalculatorCard({
  title,
  description,
  inputFields,
  compute,
  unitLabel,
  formatResult,
  renderResult,
  explanation,
}: CalculatorCardProps) {
  const [values, setValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    inputFields.forEach((field) => {
      initial[field.id] = "";
    });
    return initial;
  });
  const [result, setResult] = useState<CalculatorComputation | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsedValues: Record<string, number> = {};
    let hasInvalid = false;

    inputFields.forEach((field) => {
      const rawValue = values[field.id]?.trim();
      const numericValue = rawValue ? Number(rawValue) : NaN;
      if (!Number.isFinite(numericValue)) {
        hasInvalid = true;
      } else {
        parsedValues[field.id] = numericValue;
      }
    });

    if (hasInvalid) {
      setResult(NaN);
      return;
    }

    const computed = compute(parsedValues);
    setResult(computed);
  };

  const displayResult = () => {
    if (result === null) return null;
    if (typeof result === "number" && Number.isNaN(result)) {
      return <p className="result">Please enter valid numeric values.</p>;
    }
    if (renderResult) {
      return <div className="result">{renderResult(result)}</div>;
    }
    if (typeof result === "number") {
      const formatted = formatResult ? formatResult(result) : result.toLocaleString();
      return (
        <p className="result">
          Result: <strong>{formatted}</strong> {unitLabel}
        </p>
      );
    }
    const formatted = formatResult ? formatResult(result) : "";
    return (
      <div className="result">
        <strong>{formatted}</strong> {unitLabel}
      </div>
    );
  };

  return (
    <section className="section-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {explanation}
      <form className="form-card" onSubmit={handleSubmit}>
        <div className="input-row">
          {inputFields.map((field) => (
            <label key={field.id} className="input-group" htmlFor={field.id}>
              {field.label}
              <input
                id={field.id}
                name={field.id}
                value={values[field.id] ?? ""}
                placeholder={field.placeholder}
                inputMode="decimal"
                onChange={(event) => {
                  setValues((prev) => ({
                    ...prev,
                    [field.id]: event.target.value,
                  }));
                }}
              />
              {field.unit ? <small>{field.unit}</small> : null}
            </label>
          ))}
        </div>
        <button className="primary-button" type="submit">
          Calculate
        </button>
        {displayResult()}
      </form>
    </section>
  );
}
