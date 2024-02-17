import { Field, Formik } from 'formik';
import { ErrMsg, StyledForm } from './QuizForm.styled';
import * as Yup from 'yup';

const quizSchema = Yup.object().shape({
  topic: Yup.string().min(3, 'Too Short').required('Required'),
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
          <Field name="topic" type="text" placeholder="Quiz topic..." />
          <ErrMsg name="topic" component="div" />
        </label>
        <label>
          Time
          <Field name="time" type="number" />
          <ErrMsg name="time" component="div" />
        </label>
        <label>
          Questions
          <Field name="questions" type="number" />
          <ErrMsg name="questions" component="div" />
        </label>
        <label>
          Level
          <Field as="select" name="level">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </Field>
          <ErrMsg name="level" component="div" />
        </label>
        <button type="submit">Submit</button>
      </StyledForm>
    </Formik>
  );
};
