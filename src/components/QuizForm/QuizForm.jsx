import { Formik } from 'formik';
import {
  BtnSubmit,
  ErrMsg,
  StyledFieldInput,
  StyledFieldSelect,
  StyledForm,
  WrapperFormik,
} from './QuizForm.styled';
import * as Yup from 'yup';

const quizSchema = Yup.object().shape({
  topic: Yup.string().required('Required'),
  time: Yup.number()
    .min(5, 'At least 5 mins')
    .max(60, 'At most 60 mins')
    .positive('Must be possitive!')
    .required('Required'),
  questions: Yup.number()
    .min(3, 'At least 3')
    .positive('Must be possitive!')
    .required('Required'),
  level: Yup.string()
    .oneOf(['beginner', 'intermediate', 'advanced'])
    .required('Required'),
});

export const QuizForm = ({ onAdd }) => {
  return (
    <WrapperFormik>
      <Formik
        initialValues={{
          topic: '',
          time: 0,
          questions: 0,
          level: 'beginner',
        }}
        validationSchema={quizSchema}
        onSubmit={(values, { resetForm }) => {
          onAdd(values);
          resetForm();
        }}
      >
        <StyledForm>
          <label>
            Topic
            <StyledFieldInput
              name="topic"
              type="text"
              placeholder="Enter the quiz topic..."
            />
            <ErrMsg name="topic" component="div" />
          </label>
          <label>
            Time
            <StyledFieldInput
              name="time"
              type="number"
            />
            <ErrMsg name="time" component="div" />
          </label>
          <label>
            Questions
            <StyledFieldInput
              name="questions"
              type="number"
            />
            <ErrMsg name="questions" component="div" />
          </label>
          <label>
            Level
            <StyledFieldSelect as="select" name="level">
              {/* <option value="default">Choose a level</option> */}
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </StyledFieldSelect>
            <ErrMsg name="level" component="div" />
          </label>
          <BtnSubmit type="submit">Submit</BtnSubmit>
        </StyledForm>
      </Formik>
    </WrapperFormik>
  );
};
