import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen about-game-bg py-20 relative">
      <div className="absolute inset-0 bg-[#0B1E26] opacity-80 z-10" />
      <div className="container mx-auto px-6 relative z-20">
        <h1 className="text-4xl font-bold text-center text-white py-12">About Spurt! Empire Games</h1>


        <div className="mb-8 bg-[#0B1E26] rounded-[16px] border border-[#1C621B]">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-[#A5EC60]  mb-4">Game Overview</h2>
            <p className="text-white mb-4">
              Spurt! Empire Games is a dynamic board game that simulates the journey of building and
              managing a business empire. From launching your first company to navigating complex market
              challenges, the game immerses players in real-world business scenarios that require strategic
              planning, resource management, and quick thinking.
            </p>
          </div>
        </div>


        <div className="mb-8 bg-[#0B1E26] rounded-[16px] border border-[#1C621B]">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-[#A5EC60] mb-4">Key Gameplay Features</h2>
            <ul className="space-y-4  list-disc list-inside text-white">
              <li>
                <strong >Business Simulation:</strong> Build and grow a virtual business empire, making decisions that affect your success.
              </li>
              <li>
                <strong>Competitive or Cooperative Play:</strong> Choose to play as a fierce competitor or collaborate with others to achieve success.
              </li>
              <li>
                <strong>Real-World Lessons:</strong> The game mirrors actual business challenges such as supply chain management, customer satisfaction, and competition.
              </li>
              <li>
                <strong>Multiple Scenarios:</strong> Explore different business industries, from tech startups to retail giants.
              </li>
            </ul>
          </div>
        </div>


        <div className="mb-8 bg-[#0B1E26] rounded-[16px] border border-[#1C621B]">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-[#A5EC60] mb-4">Ideal For</h2>
            <ul className="space-y-4  list-disc list-inside text-white">
              <li>
                <strong>Families & Friends:</strong> {"A great way to bond over a challenging yet fun game that's suitable for ages 12 and up."}
              </li>
              <li>
                <strong>Entrepreneurs:</strong> Learn about resource management, strategy, and competition in a risk-free environment.
              </li>
              <li>
                <strong>Educational Institutions:</strong> Perfect for classrooms, business courses, and leadership workshops.
              </li>
            </ul>
          </div>
        </div>


        <div className="mb-8 bg-[#0B1E26] rounded-[16px] border border-[#1C621B]">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-[#A5EC60] mb-4">Gameplay Dynamics</h2>
            <ul className="space-y-4  list-disc list-inside text-white">
              <li>
                <strong>Strategy-Based:</strong> {"Every decision impacts your business's growth, from hiring staff to investing in new technology."}
              </li>
              <li>
                <strong>Multiplayer Experience:</strong> Compete against up to four other players, each with their own strategies and objectives.
              </li>
              <li>
                <strong>Business Pillars:</strong> Explore the four key pillars of business success - innovation, expansion, resource management, and risk-taking.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 