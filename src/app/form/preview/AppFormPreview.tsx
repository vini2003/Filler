import React from 'react';
import { AppFormData } from "../AppFormData";
import "./AppFormPreview.scss";

export interface AppFormPreviewProps {
  formData: AppFormData;
}

export const AppFormPreview: React.FC<AppFormPreviewProps> = (props) => {
  const formData = props.formData;

  function prettyFormatDate(dateString: string): string {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const formattedDate = date.toLocaleDateString('en-US', options);

    const day = date.getDate();
    const daySuffix = getDaySuffix(day);

    return formattedDate.replace(/\d+/, `$&${daySuffix}`);
  }

  function getDaySuffix(day: number): string {
    if (day >= 11 && day <= 13) {
      return 'th';
    } else {
      const lastDigit = day % 10;
      if (lastDigit === 1) return 'st';
      if (lastDigit === 2) return 'nd';
      if (lastDigit === 3) return 'rd';
      return 'th';
    }
  }

  return (
      <div className={`app-form-preview`}>
        <div className="row">
          <div className="col">
            <strong>Name:</strong>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {formData.name.length == 0 ? 'N/A' : formData.name}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <strong>Date:</strong>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {formData.date.length == 0 ? 'N/A' : prettyFormatDate(formData.date)}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <strong>Email:</strong>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {formData.email.length == 0 ? 'N/A' : formData.email}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <strong>Address:</strong>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {formData.address.length == 0 ? 'N/A' : formData.address}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <strong>Amount:</strong>
          </div>
        </div>
        <div className="row">
          <div className="col">
            ${formData.amount.length == 0 ? 'N/A' : formData.amount}
          </div>
        </div>
      </div>
  );
};

export default AppFormPreview;
