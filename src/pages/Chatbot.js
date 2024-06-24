import '../pages/styles/Chatbot.css';
import logo from '../assets/AVICSC.png';
import React, { useState, useRef, useEffect } from 'react';
import { BsArrowUpCircleFill } from 'react-icons/bs';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatBoxRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [messages]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = { text: input, sender: 'user' };
      setMessages([...messages, newMessage]);
      handleBotResponse(input);
      setInput('');
    }
  };

  const handleBotResponse = async (userInput) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://localhost:7102/Chatbot?input=${encodeURIComponent(userInput)}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.text();
      const botMessage = { text: `AVICSC: ${data}`, sender: 'bot' };
      setMessages((messages) => [...messages, botMessage]);
    } catch (error) {
      console.error('Failed to fetch bot response:', error);
      const errorMessage = {
        text: `Error fetching response: ${error.message}`,
        sender: 'bot',
      };
      setMessages((messages) => [...messages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className='app-container'>
      <div className='logo'>
        <img src={logo} alt='Logo' style={{ width: '200px' }} />
      </div>
      <div className='chat-container'>
        <div className='chat-box' ref={chatBoxRef}>
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          {isLoading && (
            <div className='message bot'>
              {isLoading && (
                <div className='dots-container'>
                  <span className='dot'></span>
                  <span className='dot'></span>
                  <span className='dot'></span>
                </div>
              )}
            </div>
          )}
        </div>
        <div className='input-container'>
          <input
            type='text'
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder='Scrie un mesaj...'
            className='chat-input'
          />
          <BsArrowUpCircleFill
            onClick={handleSend}
            className='send-button'
            size='30'
          />
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
