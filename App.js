//2ND ITERATION WITH LOG IN CREDENTIALS RE-DIRECTION AND DIFF BACKGROUND 
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity, Linking, Alert, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(null); // Dropdown hook
  const [showTabs, setShowTabs] = useState(false); // Control visibility of tabs
  const [showOptions, setShowOptions] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(require('./assets/welcomeimage.png'));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null); // Track selected option index

  // Styling of UI
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //1st background image
  backgroundpng: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    resizeMode: 'cover',
  },
  // 2nd background image clock tower
  backgroundpng2: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    resizeMode: 'cover',
  },
  welcomeMessage: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    color: 'maroon',
    fontWeight: 'bold',
  },
  whiteBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: 300,
    alignItems: 'center',
  },
  texts: {
    fontSize: 18,
    color: 'maroon',
    fontWeight: 'bold',
  },
  textContainer: {
    marginVertical: 10,
  },
  dropdown: {
    marginTop: 5,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  dropdownOption: {
    paddingVertical: 5,
    fontSize: 16,
    color: '#333',
  },

  loginContainer: {
    position: 'absolute',
    top: 100,
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 16,
    color: '#333',
  },
  inputField: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },

  //LOG OUT UI
  logoutContainer: { 
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: '100%', // Match the width of the dropdown box
    alignItems: 'left',
  },
  logoutButton: {
    backgroundColor: '#c00', // Red color for logout button
    padding: 10,
    borderRadius: 10,
    width: '25%', // Full width
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 12,
  },
});


  // Selections for the onboarding guides
  const messages = [
    {
      text: 'Student',
      options: [
        { label: 'Account Management', url: 'https://www.tamiu.edu/oit/students/index.shtml#account' },
        { label: 'Elearning guides', url: 'https://www.tamiu.edu/distance/technical-support-services.shtml' },
        { label: 'Check status', url: 'https://info.tamiu.edu/applicationstatus/applicationstatus.aspx#Check%20Status' },
      ],
    },
    {
      text: 'Staff',
      options: [
        { label: 'Account Management', url: 'https://www.tamiu.edu/oit/facultystaff/staff-manageacct.shtml' },
        { label: 'Infobase learning cloud', url: 'https://www.tamiu.edu/distance/technology/infobase-learning-cloud.shtml' },
        { label: 'Forms', url: 'https://www.tamiu.edu/oit/facultystaff/oitforms.shtml' },
      ],
    },
    {
      text: 'Professor',
      options: [
        { label: 'Account Management', url: 'https://www.tamiu.edu/oit/facultystaff/staff-manageacct.shtml' },
        { label: '', url: 'https://example.com/3-2' },
        { label: '', url: 'https://example.com/3-3' },
      ],
    },
  ];

 
   // Logic for login info and new background with options
   const handleLoginPress = () => {
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
      setBackgroundImage(require('./assets/towernightnew1.png'));
      setShowLogin(false); // Hide login menu after logging in
    }
  };

  // Hook for dropdown toggle
  const toggleDropdown = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index); // Collapse or open dropdown
  };

  // Hook for link press
  const handleLinkPress = (url) => {
    Linking.openURL(url).catch(err => console.error("Error opening URL", err)); // Error handling
  };

  const handleStartHerePress = () => {
    setShowOptions(true); // Show login screen after pressing onboarding
  };

  const handleOptionPress = (index) => {
    setSelectedOptionIndex(index); // Save the selected option index
    setShowLogin(true); // Show login screen when an option is pressed
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowLogin(false);
    setSelectedOptionIndex(null);
    setUsername('');
    setPassword('');
    setBackgroundImage(require('./assets/welcomeimage.png')); // Reset background image
  };

return (
    <View style={styles.container}>
      <Image style={styles.backgroundpng} source={backgroundImage} />

      {showLogin ? (
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Login</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Username:</Text>
            <TextInput
              style={styles.inputField}
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password:</Text>
            <TextInput
              style={styles.inputField}
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      ) : isLoggedIn && selectedOptionIndex !== null ? (
        <View style={styles.whiteBox}>
          <View style={styles.textContainer}>
            <Text style={styles.texts}>{messages[selectedOptionIndex].text}</Text>
          </View>
          <View style={styles.dropdown}>
            {messages[selectedOptionIndex].options.map((option, optIndex) => (
              <TouchableOpacity key={optIndex} onPress={() => handleLinkPress(option.url)}>
                <Text style={styles.dropdownOption}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* Logout button in its own box */}
          <View style={styles.logoutContainer}>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : showOptions ? (
        messages.map((message, index) => (
          <TouchableOpacity key={index} style={styles.whiteBox} onPress={() => handleOptionPress(index)}>
            <Text style={styles.texts}>{message.text}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <TouchableOpacity style={styles.welcomeMessage} onPress={handleStartHerePress}>
          <Text style={styles.welcomeText}>Begin Onboarding</Text>
        </TouchableOpacity>
      )}

      <StatusBar style="auto" />
    </View>
  );
}