import React, {useState} from 'react';
import {AppFormData} from "./form/AppFormData";
import AppForm from "./form/AppForm";
import AppFormPreview from "./form/preview/AppFormPreview";

const App: React.FC = () => {
  const [formData, setFormData] = useState<AppFormData>({
    name: '',
    date: '',
    email: '',
    address: '',
    amount: '',
  });

  return (
      <div className={`app`}>
        <AppForm formData={formData} setFormData={setFormData} />
        <AppFormPreview formData={formData} />
      </div>
  );
};

export default App;
