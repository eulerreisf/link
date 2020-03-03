//  React
import React from "react";

//  React Native
import { View } from "react-native";

// Paper
import { TextInput, Button, Title } from "react-native-paper";

// Formik
import { Formik } from "formik";

//  Background
import Background from "../Background";

const SignUp = () =>
  <Background>
    <View style={{
      margin: 20,
      paddingTop: 50,
      flexDirection: 'row',
      justifyContent: 'center'
    }}>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
        onSubmit={(value) => console.log(value)}
      >{({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={{ flex: 1 }}>
          <Title style={{ marginBottom: 40, alignSelf: 'center' }}>Cadastro</Title>
          <TextInput
            onChangeText={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
            value={values.firstName}
            mode='flat'
            label='firstName'
            style={{ marginTop: 10 }}
          />
          <TextInput
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            value={values.lastName}
            mode='flat'
            label='lastName'
            style={{ marginTop: 10 }}
          />
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            mode='flat'
            label='Email'
            style={{ marginTop: 10 }}
          />
          <TextInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            mode='flat'
            label='password'
            style={{ marginTop: 10 }}
          />
          <Button mode="contained" onPress={handleSubmit} style={{ marginTop: 10 }}>
            Cadastrar
      </Button>
        </View>
      )
        }
      </Formik>
    </View>
  </Background>;

export default SignUp;
