export const useAlert = () => {
  const showAlert = useState('show_alert', () => false);
  const alertTitle = useState('alert_title', () => '');
  const alertMessage = useState('alert_message', () => '');
  const alertType = useState('alert_type', () => 'success')
  
  const setAlertType = (newType) => {
    alertType.value = newType;
  }

  const setAlertMessages = (newTitle, newMessage) => {
    alertTitle.value = newTitle;
    alertMessage.value = newMessage;
  }

  const turnOnAlert = (newTitle, newMessage, newAlertType) => {
    setAlertType(newAlertType);
    setAlertMessages(newTitle, newMessage);
    showAlert.value = true;
  }

  const turnOffAlert = () => {
    alertTitle.value = ''
    alertMessage.value = ''
    showAlert.value = false;
  }
  
  return {
    showAlert,
    turnOnAlert,
    turnOffAlert,
    alertTitle,
    alertMessage,
    setAlertMessages,
    alertType
  }
}
