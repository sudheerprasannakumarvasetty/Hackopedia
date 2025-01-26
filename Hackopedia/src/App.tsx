import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Shield, 
  Mail, 
  Linkedin, 
  Send,
  MonitorDown,
  Sword,
  Scan,
  Bug,
  Wifi,
  Database,
  Key,
  Network,
  Search,
  Globe,
  X
} from 'lucide-react';

// Tool data with real-world scenarios
const tools = [
  {
    name: 'Wireshark',
    shortDesc: 'Network Packet Analyzer',
    icon: MonitorDown,
    purpose: 'Network packet analysis for capturing and analyzing live network traffic.',
    scenario: 'Detect unauthorized data transfers in an organization\'s network by monitoring and analyzing network packets.',
    features: [
      'Captures live network traffic',
      'Deep packet inspection',
      'Protocol analysis',
      'Real-time monitoring'
    ],
    guide: [
      'Open Wireshark and select a network interface',
      'Start capturing traffic and apply filters like http',
      'Analyze packets for suspicious activities',
      'Document and report any security concerns'
    ]
  },
  {
    name: 'Metasploit Framework',
    shortDesc: 'Exploitation and Penetration Testing',
    icon: Sword,
    purpose: 'Comprehensive platform for penetration testing and vulnerability exploitation.',
    scenario: 'Simulate an attack on a vulnerable server to identify weaknesses in the system\'s security.',
    features: [
      'Automated exploit delivery',
      'Post-exploitation tools',
      'Vulnerability testing',
      'Security assessment'
    ],
    guide: [
      'Launch msfconsole',
      'Search for an exploit: search exploit_name',
      'Configure with set RHOST <target_IP>',
      'Execute and analyze system response'
    ]
  },
  {
    name: 'Nmap',
    shortDesc: 'Network Scanning and Mapping',
    icon: Scan,
    purpose: 'Network discovery and security auditing through comprehensive scanning.',
    scenario: 'Map all devices in a local network to identify potential security vulnerabilities.',
    features: [
      'Port scanning',
      'Service detection',
      'OS fingerprinting',
      'Network mapping'
    ],
    guide: [
      'Run nmap <IP_ADDRESS>',
      'Use nmap -A <IP> for deeper analysis',
      'Interpret results to identify weak points',
      'Create network security report'
    ]
  },
  {
    name: 'Burp Suite',
    shortDesc: 'Web Application Security Testing',
    icon: Bug,
    purpose: 'Comprehensive platform for web application security assessment.',
    scenario: 'Identify and exploit SQL injection vulnerabilities in a web application.',
    features: [
      'HTTP request interception',
      'Automated scanning',
      'Vulnerability detection',
      'Security testing tools'
    ],
    guide: [
      'Set up Burp Suite and configure browser proxy',
      'Intercept and analyze HTTP requests',
      'Use scanner to detect vulnerabilities',
      'Document and report findings'
    ]
  },
  {
    name: 'Aircrack-ng',
    shortDesc: 'Wireless Network Security Testing',
    icon: Wifi,
    purpose: 'Suite of tools for assessing WiFi network security.',
    scenario: 'Test the strength of a Wi-Fi network\'s password and security configuration.',
    features: [
      'WEP/WPA-PSK cracking',
      'Network monitoring',
      'Packet capture',
      'Security assessment'
    ],
    guide: [
      'Capture packets with airodump-ng',
      'Use aircrack-ng to analyze security',
      'Ensure legal testing permissions',
      'Report security findings'
    ]
  },
  {
    name: 'John the Ripper',
    shortDesc: 'Advanced Password Cracker',
    icon: Key,
    purpose: 'Password security testing and recovery tool.',
    scenario: 'Test password policies by attempting to crack weak credentials in a controlled environment.',
    features: [
      'Multiple hash format support',
      'Fast brute-force techniques',
      'Dictionary attacks',
      'Custom rule sets'
    ],
    guide: [
      'Prepare a hash file for testing',
      'Run john <file> to start cracking',
      'Review results for weak passwords',
      'Implement stronger password policies'
    ]
  },
  {
    name: 'Maltego',
    shortDesc: 'Information Gathering and OSINT',
    icon: Search,
    purpose: 'Visual link analysis for gathering and connecting information.',
    scenario: 'Map relationships between entities during a comprehensive threat analysis.',
    features: [
      'Data visualization',
      'OSINT collection',
      'Relationship mapping',
      'Threat intelligence'
    ],
    guide: [
      'Install Maltego and set up account',
      'Choose transforms for data gathering',
      'Analyze relationships and patterns',
      'Create intelligence reports'
    ]
  },
  {
    name: 'Hydra',
    shortDesc: 'Network Login Cracker',
    icon: Network,
    purpose: 'Tests network services for weak passwords through brute-force attacks.',
    scenario: 'Test the strength of SSH credentials in a secure, controlled environment.',
    features: [
      'Multi-protocol support',
      'Parallel testing',
      'Custom attack lists',
      'Detailed logging'
    ],
    guide: [
      'Install Hydra on testing system',
      'Configure attack parameters',
      'Run: hydra -l user -P passlist target protocol',
      'Analyze results and improve security'
    ]
  },
  {
    name: 'SQLmap',
    shortDesc: 'SQL Injection Testing',
    icon: Database,
    purpose: 'Automated SQL injection detection and exploitation tool.',
    scenario: 'Test web applications for database security vulnerabilities.',
    features: [
      'Automated injection testing',
      'Database fingerprinting',
      'Data extraction testing',
      'Vulnerability assessment'
    ],
    guide: [
      'Run SQLmap: sqlmap -u <URL>',
      'Analyze injection points',
      'Test database security',
      'Document and fix vulnerabilities'
    ]
  },
  {
    name: 'Ngrok',
    shortDesc: 'Secure Tunnel Creation',
    icon: Globe,
    purpose: 'Creates secure tunnels for exposing local servers to the internet.',
    scenario: 'Share a local development site securely for client testing and review.',
    features: [
      'Secure tunneling',
      'HTTP/HTTPS support',
      'TCP tunneling',
      'Request inspection'
    ],
    guide: [
      'Install Ngrok on your system',
      'Run ngrok http <port>',
      'Share the generated URL',
      'Monitor incoming connections'
    ]
  }
];

function App() {
  const [expandedTool, setExpandedTool] = useState<string | null>(null);
  const [feedback, setFeedback] = useState('');
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleTool = (toolName: string) => {
    setExpandedTool(expandedTool === toolName ? null : toolName);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your feedback! We appreciate your input.');
    setFeedback('');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsNavVisible(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-white" />
              <span className="font-bold text-xl text-white">Hackopedia</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {['about', 'tools', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-300 hover:text-white capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsNavVisible(!isNavVisible)}
              className="md:hidden p-2"
            >
              {isNavVisible ? (
                <X className="w-6 h-6 text-gray-300" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isNavVisible && (
          <div className="md:hidden bg-black border-t border-white/10">
            {['about', 'tools', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-white/5 capitalize"
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center px-4 relative pt-16 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/90"></div>
        <div className="max-w-4xl mx-auto relative">
          <Shield className="w-20 h-20 mx-auto mb-8 text-white" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Hackopedia: The Ethical Hacking Toolkit
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Explore, Learn, and Master Ethical Hacking Tools for Real-World Applications
          </p>
          <button
            onClick={() => scrollToSection('tools')}
            className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg"
          >
            Discover Tools
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About</h2>
          <p className="text-lg md:text-xl text-gray-700">
            Hackopedia is your go-to resource for ethical hacking tools. Discover tools, understand their purpose, 
            and learn how to use them responsibly in real-world scenarios.
          </p>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Security Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => {
              const isExpanded = expandedTool === tool.name;
              return (
                <div 
                  key={tool.name} 
                  className={`bg-white/5 rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-white/10 border border-white/10 ${
                    isExpanded ? 'md:col-span-2 lg:col-span-3' : ''
                  }`}
                >
                  <div
                    className="p-6 cursor-pointer"
                    onClick={() => toggleTool(tool.name)}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <tool.icon className="w-8 h-8 text-white" />
                        <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-gray-400 mt-1" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 mt-1" />
                      )}
                    </div>
                    <p className="text-gray-300">{tool.shortDesc}</p>
                  </div>
                  {isExpanded && (
                    <div className="px-6 pb-6 border-t border-white/10">
                      <div className="mt-4">
                        <h4 className="font-semibold mb-2 text-white">Purpose</h4>
                        <p className="text-gray-300">{tool.purpose}</p>
                      </div>
                      <div className="mt-4">
                        <h4 className="font-semibold mb-2 text-white">Real-World Scenario</h4>
                        <p className="text-gray-300">{tool.scenario}</p>
                      </div>
                      <div className="mt-4">
                        <h4 className="font-semibold mb-2 text-white">Key Features</h4>
                        <ul className="list-disc list-inside text-gray-300">
                          {tool.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-4">
                        <h4 className="font-semibold mb-2 text-white">How to Use</h4>
                        <ol className="list-decimal list-inside text-gray-300">
                          {tool.guide.map((step, index) => (
                            <li key={index}>{step}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white text-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contact</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <a
              href="mailto:sudheerprasannakumarv@gmail.com"
              className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
            >
              <Mail className="w-5 h-5" />
              sudheerprasannakumarv@gmail.com
            </a>
            <a
              href="http://linkedin.com/in/sudheer74"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn Profile
            </a>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your feedback or suggestions..."
                className="flex-1 px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors flex items-center gap-2 justify-center"
              >
                <Send className="w-4 h-4" />
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;