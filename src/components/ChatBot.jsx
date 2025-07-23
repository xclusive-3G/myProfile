import React from 'react'
import { BsChatFill } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";



const ChatBot = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [messages, setMessages] = React.useState([])
    const [input, setInput] = React.useState('');


    const handleSend = async() => {
        if (!input.trim()) return;

        const newMessage = [...messages,{ text: input, sender: 'user' }] ;
        setMessages(newMessage);
        setInput('');

        // Simulate a bot response
        // const botResponse = await fetchBotResponse(input);
        // setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);

        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({messages:input}),
            })

            const data = await response.json();
            setMessages([...newMessage,{type:'bot', text:data.reply}]);

        } catch (error) {
            setMessages([...newMessage,{type:'bot',text:'Error fetching response. Please try again.'}]);
        }
    }
  return (
    <div className='fixed bottom-6 right-6 z-50 '>
        {
            !isOpen ? (
                <button 
                    onClick={() => setIsOpen(true)} 
                    className='group bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition-colors'
                >
                    <span className='block group-hover:hidden animate-pulse'><BsChatFill size={25} /></span><span className='hidden group-hover:block'>Chat with me</span>
                </button>
            ) :
            isOpen && (
                <div className=' w-60 md:w-80 h-96 bg-white shadow-xl rounded-xl flex flex-col overflow-hidden border border-gray-300'>
                    <div className='bg-green-500 text-white p-3 text-center font-semibold flex items-center justify-between'>
                        <p>Ask Me About Ayomide 👋</p>
                        <p className='text-red-600 cursor-pointer p-1' onClick={()=>setIsOpen(false)}><IoCloseSharp size={25} /></p>
                    </div>
                    
                    <div className='flex-1 p-3 overflow-y-auto space-y-2 bg-gray-50 text-sm'>
                        {messages.map((msg, index) => (
                            <div key={index} className={`p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-200 self-start'}`}>
                                {msg.text}
                            </div>
                        ))}

                    </div>
                    <div className='p-2 border-t flex gap-2'>
                        <input 
                            type='text' 
                            value={input} 
                            onChange={(e) => setInput(e.target.value)} 
                            className='flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
                            placeholder='Type your message...'
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') handleSend();
                            }}
                        />
                        <button 
                            onClick={handleSend} 
                            className='hidden md:block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors '
                        >
                            Send
                        </button>

                    </div>
                </div>
            )
        }
        
    </div>
  )
}

export default ChatBot