import {StyleSheet,Text,View,TextInput,TouchableOpacity,ImageBackground,Alert,Dimensions} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window");
const bg = require('../assets/mobileTruckBackground.png');

const EmailVerification = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  // simple email validation
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    setIsSubmitted(true);

    Alert.alert(
      'Email Sent',
      'Check your email, we sent you a verification link.'
    );
  };

  const handleCheckVerification = () => {
    // simulate verification (replace with backend later)
    const success = true; 

    if (success) {
      setIsVerified(true);
      Alert.alert('Success', 'Email verified successfully');

      // navigate later
      // router.push('/dashboard');
    } else {
      Alert.alert('Failed', 'Failed to verify email.');
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ImageBackground source={bg} style={styles.background} blurRadius={4}>
        
        {/* Back Button */}
        <TouchableOpacity
               onPress={() => router.back()} style={styles.backBtn}>
               <Ionicons name="arrow-back" size={36} color="#fff" />
             </TouchableOpacity>
        {/* Heading */}
        <View style={styles.container}>
          <Text style={styles.title}>Lets Verify your Email Address</Text>
          {/* Sub heading */}
          <Text style={styles.subtitle}>
            Please enter your email to receive a verification link.
          </Text>

          <TextInput
            placeholder="Email Address"
            placeholderTextColor="#aaa"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          {/* Submit */}
          <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>

          {/* Check Verification */}
          <TouchableOpacity
            style={[
              styles.checkBtn,
              {
                backgroundColor: isSubmitted ? '#3F9D9F' : '#999',
                opacity: isSubmitted ? 1 : 0.5,
              },
            ]}
            onPress={handleCheckVerification}
            disabled={!isSubmitted}
          >
            <Text style={styles.btnText}>Check Verification</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default EmailVerification;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#000',
  },

  background: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

    backBtn: {
    position: "absolute",
    top: height * 0.06,
    left: 20,
    zIndex: 10,
  },

 container: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
    paddingBottom: height * 0.08,
  },

   title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: width * 0.09,
  },

   subtitle: {
    marginTop: 5,
    color: "#A19898",
    fontSize: width * 0.04,
  },

  input: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 10,
    padding: 15,
    color: "#fff",
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#F7373C',
    marginBottom: 25
  },

  submitBtn: {
    backgroundColor: '#E53935',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    
  },

  checkBtn: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
});