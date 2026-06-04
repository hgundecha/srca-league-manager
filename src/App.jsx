import React, { useState, useEffect, useMemo } from 'react';

const INITIAL_ROSTER = [
  { id: "878745", firstName: "Aaryan", lastName: "Gundecha", jerseyName: "AARYAN", jerseyNumber: "73", registered: true, email: "aaryan.gundecha@gmail.com", city: "San Ramon" },
  { id: "5245404", firstName: "Adwait", lastName: "Umbarkar", jerseyName: "ADWAIT", jerseyNumber: "", registered: true, email: "adwaitumbarkar27@gmail.com", city: "Sunnyvale" },
  { id: "5269246", firstName: "Anand", lastName: "Desikan", jerseyName: "ANAND", jerseyNumber: "", registered: true, email: "anand.desikan@gmail.com", city: "San Ramon" },
  { id: "2029729", firstName: "Ashish", lastName: "Deshmukh", jerseyName: "ASH", jerseyNumber: "9", registered: true, email: "ashishadeshmukh@gmail.com", city: "Danville" },
  { id: "2029728", firstName: "Gowrisankar", lastName: "Suserla", jerseyName: "GOWRIS", jerseyNumber: "1", registered: true, email: "gsuserla@gmail.com", city: "San Ramon" },
  { id: "773287", firstName: "Harish", lastName: "Gundecha", jerseyName: "HARRY", jerseyNumber: "15", registered: true, email: "harish.gundecha@gmail.com", city: "San Ramon" },
  { id: "2029732", firstName: "Jignesh", lastName: "Sheth", jerseyName: "JIGS", jerseyNumber: "2", registered: true, email: "jignesh.sheth@yahoo.com", city: "Livermore" },
  { id: "5148796", firstName: "Karan", lastName: "Bhuta", jerseyName: "KARAN", jerseyNumber: "", registered: true, email: "karanbhuta62@gmail.com", city: "Santa Clara" },
  { id: "791692", firstName: "Kiran", lastName: "Jewargi", jerseyName: "KIRAN", jerseyNumber: "23", registered: true, email: "kiranjewargi@yahoo.com", city: "San Ramon" },
  { id: "637838", firstName: "Lohith", lastName: "Om", jerseyName: "Lohith", jerseyNumber: "", registered: true, email: "lohith.bo@gmail.com", city: "Sunnyvale" },
  { id: "5273568", firstName: "Masum", lastName: "Mayana", jerseyName: "MASUM", jerseyNumber: "", registered: true, email: "masumk@gmail.com", city: "Fremont" },
  { id: "5273441", firstName: "Prakash", lastName: "Dandapani", jerseyName: "PRAKASH", jerseyNumber: "", registered: true, email: "dprak@hotmail.com", city: "San Ramon" },
  { id: "6097787", firstName: "Pranava", lastName: "Parasa", jerseyName: "PRANAVA", jerseyNumber: "", registered: true, email: "pran.parasa48@gmail.com", city: "San Ramon" },
  { id: "5269221", firstName: "Pranay", lastName: "Parvataraju", jerseyName: "PRANAY", jerseyNumber: "25", registered: true, email: "pparvataraju@gmail.com", city: "San Ramon" },
  { id: "2029737", firstName: "Prashant", lastName: "Gattani", jerseyName: "GATT", jerseyNumber: "00", registered: true, email: "pgattani@gmail.com", city: "Sunnyvale" },
  { id: "2095792", firstName: "Pravin", lastName: "Gohite", jerseyName: "PRAVIN", jerseyNumber: "45", registered: true, email: "pgohite@gmail.com", city: "San Ramon" },
  { id: "2029730", firstName: "Sandeep", lastName: "Kawale", jerseyName: "SANDEEP", jerseyNumber: "99", registered: true, email: "skawaleonline@gmail.com", city: "San Ramon" },
  { id: "2325536", firstName: "Sandip", lastName: "Mohod", jerseyName: "SANDIP", jerseyNumber: "", registered: true, email: "sandipmohod@gmail.com", city: "San Ramon" },
  { id: "2029739", firstName: "Sanjay", lastName: "Bonde", jerseyName: "SANJAY", jerseyNumber: "", registered: true, email: "sanjubonde@gmail.com", city: "San Ramon" },
  { id: "5245496", firstName: "Sanket", lastName: "Kumbhar", jerseyName: "SANKET", jerseyNumber: "", registered: true, email: "sanket.kumbhar.r@gmail.com", city: "Sunnyvale" },
  { id: "6135533", firstName: "Shiv", lastName: "Sundar", jerseyName: "SHIV", jerseyNumber: "", registered: true, email: "sundarashiv@gmail.com", city: "San Ramon" },
  { id: "6097846", firstName: "Shreyas", lastName: "Reddy", jerseyName: "SHREYAS", jerseyNumber: "", registered: true, email: "cotalpha775@gmail.com", city: "San Ramon" },
  { id: "2035820", firstName: "Sudhir", lastName: "Chandel", jerseyName: "SUDHIR", jerseyNumber: "11", registered: true, email: "sudhirchandel@hotmail.com", city: "Fremont" },
  { id: "1446092", firstName: "Venkatesh", lastName: "Sundaram", jerseyName: "VENKAT", jerseyNumber: "", registered: true, email: "venki57@gmail.com", city: "San Ramon" },
  { id: "2029740", firstName: "Vinay", lastName: "Munjewar", jerseyName: "VINAY", jerseyNumber: "19", registered: true, email: "vinaymunjewar@gmail.com", city: "Sunnyvale" },
  { id: "2029733", firstName: "Vishal", lastName: "Thorat", jerseyName: "VISHAL", jerseyNumber: "10", registered: true, email: "vishal_thorat@hotmail.com", city: "San Ramon" },
  { id: "2029738", firstName: "Vishant", lastName: "Nalavade", jerseyName: "VISHANT", jerseyNumber: "55", registered: true, email: "vishant_nalavade@yahoo.com", city: "Fremont" }
];

const INITIAL_MATCHES = [
  {
    id: "match-1",
    opponent: "Coyote Hills CC",
    date: "2025-06-15",
    venue: "Central Park Cricket Ground, Fremont",
    totalFee: 110,
    splitType: "equal",
    flatFeePerPlayer: 10,
    completed: true,
    squad: ["878745", "2029729", "2029728", "773287", "2029732", "791692", "5269221", "2029737", "2029730", "2035820", "2029733"], // 11 players
    payments: {
      "878745": true,
      "2029729": true,
      "2029728": false,
      "773287": true,
      "2029732": false,
      "791692": true,
      "5269221": true,
      "2029737": true,
      "2029730": false,
      "2035820": true,
      "2029733": false
    }
  },
  {
    id: "match-2",
    opponent: "Dublin Lions CC",
    date: "2025-06-22",
    venue: "Gale Ranch Middle School, San Ramon",
    totalFee: 110,
    splitType: "equal",
    flatFeePerPlayer: 10,
    completed: false,
    squad: ["5245404", "5269246", "2029728", "5148796", "637838", "5273568", "5273441", "6097787", "2095792", "2325536", "2029739"],
    payments: {}
  }
];

export default function App() {
  const [players, setPlayers] = useState(() => {
    const localData = localStorage.getItem('srca_players');
    return localData ? JSON.parse(localData) : INITIAL_ROSTER;
  });

  const [matches, setMatches] = useState(() => {
    const localData = localStorage.getItem('srca_matches');
    return localData ? JSON.parse(localData) : INITIAL_MATCHES;
  });

  const [selectedTab, setSelectedTab] = useState('dashboard');
  const [activeMatchId, setActiveMatchId] = useState(() => {
    return INITIAL_MATCHES.length > 0 ? INITIAL_MATCHES[0].id : '';
  });

  // Search & Filter state
  const [searchTerm, setSearchTerm] = useState('');
  const [rosterFilter, setRosterFilter] = useState('all'); // all, registered, unregistered
  const [ledgerFilter, setLedgerFilter] = useState('all'); // all, outstanding, clear

  // Modals / Editors state
  const [editingPlayer, setEditingPlayer] = useState(null);
  const [isPlayerModalOpen, setIsPlayerModalOpen] = useState(false);
  const [editingMatch, setEditingMatch] = useState(null);
  const [isMatchModalOpen, setIsMatchModalOpen] = useState(false);

  // New Player Form State
  const [playerForm, setPlayerForm] = useState({
    firstName: '',
    lastName: '',
    jerseyName: '',
    jerseyNumber: '',
    registered: true,
    email: '',
    city: 'San Ramon'
  });

  // New Match Form State
  const [matchForm, setMatchForm] = useState({
    opponent: '',
    date: '',
    venue: 'Gale Ranch Middle School, San Ramon',
    totalFee: 110,
    splitType: 'equal',
    flatFeePerPlayer: 10,
    completed: false
  });

  useEffect(() => {
    localStorage.setItem('srca_players', JSON.stringify(players));
  }, [players]);

  useEffect(() => {
    localStorage.setItem('srca_matches', JSON.stringify(matches));
  }, [matches]);

  // Get calculation metrics for a specific match
  const getMatchCalculations = (match) => {
    const count = match.squad.length;
    let feePerPlayer = 0;
    if (count > 0) {
      if (match.splitType === 'equal') {
        feePerPlayer = Math.round((match.totalFee / count) * 100) / 100;
      } else {
        feePerPlayer = match.flatFeePerPlayer;
      }
    }
    return {
      feePerPlayer,
      totalExpected: match.splitType === 'equal' ? match.totalFee : (match.flatFeePerPlayer * count),
      playerCount: count
    };
  };

  // Compile full ledger and balances for every player across all matches
  const playerBalances = useMemo(() => {
    const balances = {};
    
    // Initialize for all active players
    players.forEach(p => {
      balances[p.id] = {
        player: p,
        matchesPlayed: 0,
        totalOwed: 0,
        totalPaid: 0,
        netDue: 0,
        matchBreakdown: [] // Track specific details for breakdowns
      };
    });

    // Populate balances based on match squad selections
    matches.forEach(m => {
      const { feePerPlayer } = getMatchCalculations(m);
      
      m.squad.forEach(playerId => {
        // Handle cases where player was deleted but exists in old matches safely
        if (!balances[playerId]) {
          balances[playerId] = {
            player: { id: playerId, firstName: "Former", lastName: "Squad Member", jerseyName: "N/A", email: "", city: "" },
            matchesPlayed: 0,
            totalOwed: 0,
            totalPaid: 0,
            netDue: 0,
            matchBreakdown: []
          };
        }

        const isPaid = m.payments && m.payments[playerId] === true;
        balances[playerId].matchesPlayed += 1;
        balances[playerId].totalOwed += feePerPlayer;
        if (isPaid) {
          balances[playerId].totalPaid += feePerPlayer;
        } else {
          balances[playerId].netDue += feePerPlayer;
        }

        balances[playerId].matchBreakdown.push({
          matchId: m.id,
          opponent: m.opponent,
          date: m.date,
          fee: feePerPlayer,
          paid: isPaid
        });
      });
    });

    return balances;
  }, [players, matches]);

  // Overall aggregate financial stats
  const globalStats = useMemo(() => {
    let totalCollected = 0;
    let totalOutstanding = 0;
    let totalDuesIncurred = 0;

    Object.values(playerBalances).forEach(b => {
      totalCollected += b.totalPaid;
      totalOutstanding += b.netDue;
      totalDuesIncurred += b.totalOwed;
    });

    return {
      totalCollected: Math.round(totalCollected * 100) / 100,
      totalOutstanding: Math.round(totalOutstanding * 100) / 100,
      totalDuesIncurred: Math.round(totalDuesIncurred * 100) / 100,
      matchCount: matches.length,
      playerCount: players.length
    };
  }, [playerBalances, matches, players]);

  const togglePayment = (matchId, playerId) => {
    setMatches(prevMatches => {
      return prevMatches.map(m => {
        if (m.id === matchId) {
          const currentPayments = { ...m.payments };
          currentPayments[playerId] = !currentPayments[playerId];
          return {
            ...m,
            payments: currentPayments
          };
        }
        return m;
      });
    });
  };

  const markAllSquadPaid = (matchId, value) => {
    setMatches(prevMatches => {
      return prevMatches.map(m => {
        if (m.id === matchId) {
          const updatedPayments = {};
          m.squad.forEach(pid => {
            updatedPayments[pid] = value;
          });
          return {
            ...m,
            payments: updatedPayments
          };
        }
        return m;
      });
    });
  };

  const recordGeneralPayment = (playerId, amountToPay) => {
    // Distribute payment to outstanding unpaid matches for this player from oldest to newest
    setMatches(prevMatches => {
      let remainingCredit = amountToPay;
      return prevMatches.map(m => {
        if (m.squad.includes(playerId)) {
          const hasPaid = m.payments && m.payments[playerId] === true;
          if (!hasPaid && remainingCredit > 0) {
            const { feePerPlayer } = getMatchCalculations(m);
            // Settle this match
            remainingCredit -= feePerPlayer;
            return {
              ...m,
              payments: {
                ...m.payments,
                [playerId]: true
              }
            };
          }
        }
        return m;
      });
    });
  };

  const togglePlayerInSquad = (matchId, playerId) => {
    setMatches(prevMatches => {
      return prevMatches.map(m => {
        if (m.id === matchId) {
          let updatedSquad;
          const isSelected = m.squad.includes(playerId);
          
          if (isSelected) {
            // Remove
            updatedSquad = m.squad.filter(id => id !== playerId);
          } else {
            // Add
            updatedSquad = [...m.squad, playerId];
          }

          // Retain payment status if player exists, or set to false as default
          const updatedPayments = { ...m.payments };
          if (isSelected) {
            delete updatedPayments[playerId];
          } else {
            updatedPayments[playerId] = false;
          }

          return {
            ...m,
            squad: updatedSquad,
            payments: updatedPayments
          };
        }
        return m;
      });
    });
  };

  const handlePlayerSubmit = (e) => {
    e.preventDefault();
    if (!playerForm.firstName || !playerForm.lastName) {
      alert("First Name and Last Name are required!");
      return;
    }

    if (editingPlayer) {
      // Edit mode
      setPlayers(prev => prev.map(p => p.id === editingPlayer.id ? { ...p, ...playerForm } : p));
    } else {
      // Create mode
      const newPlayer = {
        id: 'player-' + Date.now(),
        ...playerForm
      };
      setPlayers(prev => [newPlayer, ...prev]);
    }

    // Reset Form
    setIsPlayerModalOpen(false);
    setEditingPlayer(null);
    setPlayerForm({
      firstName: '',
      lastName: '',
      jerseyName: '',
      jerseyNumber: '',
      registered: true,
      email: '',
      city: 'San Ramon'
    });
  };

  const startEditPlayer = (player) => {
    setEditingPlayer(player);
    setPlayerForm({
      firstName: player.firstName,
      lastName: player.lastName,
      jerseyName: player.jerseyName || '',
      jerseyNumber: player.jerseyNumber || '',
      registered: player.registered ?? true,
      email: player.email || '',
      city: player.city || 'San Ramon'
    });
    setIsPlayerModalOpen(true);
  };

  const deletePlayer = (playerId) => {
    if (confirm("Are you sure you want to remove this player from the roster? This won't delete past historical values but will remove them from the active squad roster.")) {
      setPlayers(prev => prev.filter(p => p.id !== playerId));
      // Remove from any incomplete matches
      setMatches(prev => prev.map(m => {
        if (!m.completed) {
          return {
            ...m,
            squad: m.squad.filter(id => id !== playerId)
          };
        }
        return m;
      }));
    }
  };

  const handleMatchSubmit = (e) => {
    e.preventDefault();
    if (!matchForm.opponent || !matchForm.date) {
      alert("Opponent and Match Date are required!");
      return;
    }

    if (editingMatch) {
      // Edit
      setMatches(prev => prev.map(m => m.id === editingMatch.id ? { ...m, ...matchForm } : m));
    } else {
      // Create
      const newMatch = {
        id: 'match-' + Date.now(),
        ...matchForm,
        squad: [],
        payments: {}
      };
      setMatches(prev => [...prev, newMatch]);
      setActiveMatchId(newMatch.id);
    }

    setIsMatchModalOpen(false);
    setEditingMatch(null);
    setMatchForm({
      opponent: '',
      date: '',
      venue: 'Gale Ranch Middle School, San Ramon',
      totalFee: 110,
      splitType: 'equal',
      flatFeePerPlayer: 10,
      completed: false
    });
  };

  const startEditMatch = (match) => {
    setEditingMatch(match);
    setMatchForm({
      opponent: match.opponent,
      date: match.date,
      venue: match.venue,
      totalFee: match.totalFee,
      splitType: match.splitType,
      flatFeePerPlayer: match.flatFeePerPlayer,
      completed: match.completed
    });
    setIsMatchModalOpen(true);
  };

  const deleteMatch = (matchId) => {
    if (confirm("Are you sure you want to delete this match record? All specific squads and payments logged for this match will be lost.")) {
      setMatches(prev => prev.filter(m => m.id !== matchId));
      if (activeMatchId === matchId) {
        setActiveMatchId(matches[0]?.id || '');
      }
    }
  };

  // Find active match details
  const activeMatch = useMemo(() => {
    return matches.find(m => m.id === activeMatchId) || matches[0] || null;
  }, [matches, activeMatchId]);

  const exportLedgerToCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Player Name,Jersey Name,Jersey Number,CricClubs ID,Matches Played,Total Owed ($),Total Paid ($),Net Outstanding ($)\n";
    
    Object.values(playerBalances).forEach(b => {
      const name = `${b.player.firstName} ${b.player.lastName}`;
      const row = `"${name}","${b.player.jerseyName || ''}","${b.player.jerseyNumber || ''}","${b.player.id}",${b.matchesPlayed},${b.totalOwed.toFixed(2)},${b.totalPaid.toFixed(2)},${b.netDue.toFixed(2)}`;
      csvContent += row + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `SRCA_League_Summer2025_Dues_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      
      {}
      <header className="bg-slate-950 border-b border-slate-800 sticky top-0 z-40 backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-900/30">
                <svg className="w-6 h-6 text-slate-950 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">SRCA LEAGUE</span>
                <span className="text-xs block text-slate-400 font-medium tracking-widest uppercase">Summer 2025 Tracker</span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav className="flex space-x-1 sm:space-x-2">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z' },
                { id: 'matches', label: 'Squad & Matches', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
                { id: 'ledger', label: 'Financial Ledger', icon: 'M9 8h6m-6 4h6m-6 4h3m12.5 5.25l-2-2m2 2a4 4 0 11-4-4l2 2zm-8.25-16.5H5.25A2.25 2.25 0 003 5.25v13.5A2.25 2.25 0 005.25 21h6.75M16.5 3.75h2.25A2.25 2.25 0 0121 6v6' },
                { id: 'roster', label: 'Squad Roster', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    selectedTab === tab.id
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={tab.icon} />
                  </svg>
                  <span className="hidden md:inline">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {}
        {selectedTab === 'dashboard' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Top Stat Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 shadow-xl">
                <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Total Matches</div>
                <div className="text-3xl font-extrabold text-slate-100 mt-2">{globalStats.matchCount}</div>
                <div className="text-emerald-500 text-xs mt-1">League Summer 2025</div>
              </div>
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 shadow-xl">
                <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Squad Roster Size</div>
                <div className="text-3xl font-extrabold text-slate-100 mt-2">{globalStats.playerCount}</div>
                <div className="text-teal-400 text-xs mt-1">Ready players</div>
              </div>
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 shadow-xl">
                <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Total Match Fees</div>
                <div className="text-3xl font-extrabold text-teal-400 mt-2">${globalStats.totalDuesIncurred}</div>
                <div className="text-slate-500 text-xs mt-1">Fees accumulated</div>
              </div>
              <div className="bg-emerald-950/40 p-5 rounded-2xl border border-emerald-900/40 shadow-xl">
                <div className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">Fees Collected</div>
                <div className="text-3xl font-extrabold text-emerald-400 mt-2">${globalStats.totalCollected}</div>
                <div className="text-emerald-300/70 text-xs mt-1">Total Paid ({globalStats.totalDuesIncurred > 0 ? Math.round((globalStats.totalCollected / globalStats.totalDuesIncurred) * 100) : 0}%)</div>
              </div>
              <div className="bg-rose-950/40 p-5 rounded-2xl border border-rose-900/40 col-span-2 lg:col-span-1 shadow-xl">
                <div className="text-rose-400 text-xs font-semibold uppercase tracking-wider">Total Outstanding</div>
                <div className="text-3xl font-extrabold text-rose-400 mt-2">${globalStats.totalOutstanding}</div>
                <div className="text-rose-300/70 text-xs mt-1">Pending Collection</div>
              </div>
            </div>

            {/* Action Card Block */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Active Match Brief & Lineup Selector Access */}
              <div className="lg:col-span-2 bg-slate-950 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-slate-100 flex items-center space-x-2">
                    <span className="w-2 h-5 bg-emerald-500 rounded-sm"></span>
                    <span>Next Lineup / Active Match Detail</span>
                  </h3>
                  <button 
                    onClick={() => setSelectedTab('matches')} 
                    className="text-xs text-emerald-400 font-semibold hover:underline flex items-center space-x-1"
                  >
                    <span>Manage Lineups</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>

                {activeMatch ? (
                  <div className="p-5 rounded-xl bg-slate-900 border border-slate-800/80 space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                      <div>
                        <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                          {activeMatch.completed ? 'Completed Match' : 'Upcoming Match'}
                        </span>
                        <h4 className="text-xl font-black text-slate-100 mt-2">vs {activeMatch.opponent}</h4>
                        <p className="text-slate-400 text-sm flex items-center mt-1">
                          <svg className="w-4 h-4 mr-1 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          {activeMatch.date} @ {activeMatch.venue}
                        </p>
                      </div>
                      <div className="text-right bg-slate-950 p-3.5 rounded-xl border border-slate-800 min-w-[140px]">
                        <span className="text-xs block text-slate-400 font-bold uppercase">Estimated Share</span>
                        <span className="text-2xl font-extrabold text-emerald-400">${getMatchCalculations(activeMatch).feePerPlayer}</span>
                        <span className="text-[10px] block text-slate-500">Split among {activeMatch.squad.length} players</span>
                      </div>
                    </div>

                    <div className="border-t border-slate-800/80 pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-slate-300">Selected Team 11 ({activeMatch.squad.length})</span>
                        {activeMatch.squad.length !== 11 && (
                          <span className="text-xs text-amber-400 font-bold flex items-center space-x-1 bg-amber-950/20 px-2 py-0.5 rounded-md border border-amber-900/30">
                            <span>⚠ Expected 11 Players</span>
                          </span>
                        )}
                      </div>

                      {activeMatch.squad.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {activeMatch.squad.map(pid => {
                            const p = players.find(x => x.id === pid);
                            if (!p) return null;
                            const isPaid = activeMatch.payments && activeMatch.payments[pid] === true;
                            return (
                              <div key={pid} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                                <div className="truncate pr-1">
                                  <span className="text-xs font-bold text-slate-100 block truncate">{p.firstName} {p.lastName[0]}.</span>
                                  <span className="text-[10px] text-slate-400">Jersey #{p.jerseyNumber || 'N/A'}</span>
                                </div>
                                <button
                                  onClick={() => togglePayment(activeMatch.id, pid)}
                                  className={`h-5 w-5 rounded-full flex items-center justify-center transition-all ${
                                    isPaid 
                                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' 
                                      : 'bg-rose-500/20 text-rose-400 border border-rose-500/40 hover:bg-rose-500/30'
                                  }`}
                                  title={isPaid ? "Mark as unpaid" : "Mark as paid"}
                                >
                                  {isPaid ? '✓' : '$'}
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="text-center py-6 text-slate-500 text-sm">
                          No players selected for this match yet. Go to "Squad & Matches" to finalize selection.
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 border-2 border-dashed border-slate-800 rounded-xl">
                    <p className="text-slate-400 text-sm mb-4">No matches created for Summer 2025 yet.</p>
                    <button 
                      onClick={() => { setEditingMatch(null); setIsMatchModalOpen(true); }}
                      className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-lg text-sm transition"
                    >
                      + Create First Match
                    </button>
                  </div>
                )}
              </div>

              {/* Quick Standings / Payment Leaderboard */}
              <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 shadow-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center space-x-2">
                    <span className="w-2 h-5 bg-teal-400 rounded-sm"></span>
                    <span>Top Attendance & Dues Summary</span>
                  </h3>
                  
                  <div className="space-y-3 max-h-[320px] overflow-y-auto pr-2 custom-scrollbar">
                    {Object.values(playerBalances)
                      .sort((a, b) => b.matchesPlayed - a.matchesPlayed || b.netDue - a.netDue)
                      .slice(0, 5)
                      .map(pBal => (
                        <div key={pBal.player.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                          <div>
                            <span className="text-sm font-bold text-slate-200 block truncate max-w-[150px]">
                              {pBal.player.firstName} {pBal.player.lastName}
                            </span>
                            <span className="text-[11px] text-slate-400">{pBal.matchesPlayed} Matches Scheduled</span>
                          </div>
                          <div className="text-right">
                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${pBal.netDue > 0 ? 'bg-rose-500/10 text-rose-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
                              {pBal.netDue > 0 ? `Owes $${pBal.netDue.toFixed(2)}` : 'Clear ✓'}
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <button 
                    onClick={() => setSelectedTab('ledger')}
                    className="w-full text-center py-2.5 text-xs font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-850 rounded-xl border border-slate-800 transition"
                  >
                    View All Squad Balances
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {}
        {selectedTab === 'matches' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-100">Squad Lineups & Match Cost Splitter</h2>
                <p className="text-slate-400 text-sm mt-1">Select matches, add match fees, schedule lineups of 11, and manage status.</p>
              </div>
              <button
                onClick={() => { setEditingMatch(null); setIsMatchModalOpen(true); }}
                className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-sm shadow-lg shadow-emerald-500/10 flex items-center justify-center space-x-1.5 transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                <span>Add Match Record</span>
              </button>
            </div>

            {/* Match Select List & Selection Field Interface */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Match Selection Picker */}
              <div className="lg:col-span-4 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">All Matches scheduled</h3>
                <div className="space-y-3">
                  {matches.length > 0 ? (
                    matches.map(m => {
                      const isActive = m.id === activeMatchId;
                      const { feePerPlayer } = getMatchCalculations(m);
                      return (
                        <div 
                          key={m.id}
                          onClick={() => setActiveMatchId(m.id)}
                          className={`p-4 rounded-xl cursor-pointer border transition-all duration-200 relative overflow-hidden ${
                            isActive 
                              ? 'bg-slate-950 border-emerald-500/80 shadow-emerald-950/20 shadow-md' 
                              : 'bg-slate-950/70 border-slate-800 hover:bg-slate-950 hover:border-slate-700'
                          }`}
                        >
                          <div className="flex justify-between items-start gap-2">
                            <div className="truncate">
                              <h4 className="font-extrabold text-slate-200 truncate pr-1">vs {m.opponent}</h4>
                              <p className="text-xs text-slate-400 mt-1">{m.date}</p>
                              <span className="text-[10px] text-slate-500 block truncate mt-1">{m.venue}</span>
                            </div>
                            <div className="text-right flex flex-col items-end min-w-[70px]">
                              <span className="text-xs font-bold text-teal-400">${feePerPlayer} ea</span>
                              <span className="text-[10px] text-slate-400 mt-1 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                                {m.squad.length} selected
                              </span>
                            </div>
                          </div>

                          <div className="flex justify-between items-center mt-4 pt-3 border-t border-slate-850">
                            <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${
                              m.completed ? 'bg-slate-800 text-slate-300' : 'bg-emerald-950 text-emerald-400'
                            }`}>
                              {m.completed ? 'Finished' : 'Upcoming'}
                            </span>
                            
                            <div className="flex items-center space-x-2" onClick={e => e.stopPropagation()}>
                              <button 
                                onClick={() => startEditMatch(m)}
                                className="p-1 hover:text-emerald-400 text-slate-400 transition"
                                title="Edit Match Settings"
                              >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                              </button>
                              <button 
                                onClick={() => deleteMatch(m.id)}
                                className="p-1 hover:text-rose-400 text-slate-400 transition"
                                title="Delete Match"
                              >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-center py-6 text-slate-500 text-sm">No matches listed yet.</p>
                  )}
                </div>
              </div>

              {/* Right Column: Squad Builder Board & Lineup Assigner */}
              <div className="lg:col-span-8 bg-slate-950 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-6">
                {activeMatch ? (
                  <>
                    {/* Header Details */}
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center pb-4 border-b border-slate-800 gap-4">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold">Lineup Builder Board</span>
                        <h3 className="text-xl font-extrabold text-slate-100 mt-1">vs {activeMatch.opponent}</h3>
                        <p className="text-slate-400 text-xs mt-1">{activeMatch.venue} | {activeMatch.date}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-slate-900 px-4 py-2 rounded-xl border border-slate-800 text-center">
                          <span className="text-[10px] block text-slate-400 uppercase font-semibold">Cost Distribution</span>
                          <span className="text-sm font-bold text-slate-100">
                            {activeMatch.splitType === 'equal' ? 'Equal Split' : 'Flat rate'} (${getMatchCalculations(activeMatch).feePerPlayer}/ea)
                          </span>
                        </div>
                        <div className="bg-slate-900 px-4 py-2 rounded-xl border border-slate-800 text-center">
                          <span className="text-[10px] block text-slate-400 uppercase font-semibold">Total Match Cost</span>
                          <span className="text-sm font-bold text-teal-400">${activeMatch.totalFee}</span>
                        </div>
                      </div>
                    </div>

                    {/* Active Visual Indicator */}
                    <div className="flex flex-col sm:flex-row items-center justify-between bg-slate-900 p-4 rounded-xl border border-slate-800/80 gap-3">
                      <div>
                        <span className="text-xs font-bold text-slate-200 block">Total Selection Count: {activeMatch.squad.length} / 11 Players</span>
                        <p className="text-[11px] text-slate-400 mt-0.5">Please select exactly 11 players for match day from the roster pool below.</p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => markAllSquadPaid(activeMatch.id, true)}
                          className="px-3 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-lg transition"
                        >
                          Mark All Paid
                        </button>
                        <button
                          onClick={() => markAllSquadPaid(activeMatch.id, false)}
                          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-750 text-slate-300 border border-slate-750 text-xs font-bold rounded-lg transition"
                        >
                          Reset Payments
                        </button>
                      </div>
                    </div>

                    {/* Selector Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Sub-Column: Selected 11 Match Squad List */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-center px-1">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">Selected Lineup ({activeMatch.squad.length})</h4>
                          {activeMatch.squad.length === 11 ? (
                            <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-950/40 border border-emerald-900/40 px-2 py-0.5 rounded">✓ Perfect 11</span>
                          ) : (
                            <span className="text-[10px] font-extrabold text-amber-400 bg-amber-950/40 border border-amber-900/40 px-2 py-0.5 rounded">Need {11 - activeMatch.squad.length > 0 ? 11 - activeMatch.squad.length : activeMatch.squad.length - 11} {activeMatch.squad.length < 11 ? 'more' : 'fewer'}</span>
                          )}
                        </div>

                        <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/80 min-h-[300px] max-h-[450px] overflow-y-auto space-y-2">
                          {activeMatch.squad.length > 0 ? (
                            activeMatch.squad.map((pid, idx) => {
                              const p = players.find(x => x.id === pid);
                              if (!p) return null;
                              const isPaid = activeMatch.payments && activeMatch.payments[pid] === true;
                              return (
                                <div key={pid} className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 transition">
                                  <div className="flex items-center space-x-2.5">
                                    <span className="text-xs font-bold text-slate-500 w-4">{idx + 1}</span>
                                    <div>
                                      <span className="text-sm font-extrabold text-slate-100 block">{p.firstName} {p.lastName}</span>
                                      <span className="text-[11px] text-slate-400">Jersey: {p.jerseyName || 'N/A'} (#{p.jerseyNumber || '--'})</span>
                                    </div>
                                  </div>

                                  <div className="flex items-center space-x-3">
                                    {/* Pay Toggle Button */}
                                    <button
                                      onClick={() => togglePayment(activeMatch.id, pid)}
                                      className={`px-2 py-1 text-xs font-bold rounded-md border transition ${
                                        isPaid 
                                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
                                          : 'bg-rose-500/10 text-rose-400 border-rose-500/30 hover:bg-rose-500/20'
                                      }`}
                                    >
                                      {isPaid ? 'Paid' : 'Unpaid'}
                                    </button>

                                    {/* De-select Button */}
                                    <button 
                                      onClick={() => togglePlayerInSquad(activeMatch.id, pid)}
                                      className="p-1.5 hover:text-rose-400 text-slate-500 transition"
                                      title="Remove from lineup"
                                    >
                                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                    </button>
                                  </div>
                                </div>
                              );
                            })
                          ) : (
                            <div className="flex flex-col items-center justify-center h-full py-12 text-slate-500 space-y-2">
                              <span className="text-3xl">🏏</span>
                              <p className="text-xs">Select players from the pool to form your squad.</p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Sub-Column: Full Squad Roster Pool Selector */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between px-1">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">Available Player Pool ({players.length})</h4>
                          <input 
                            type="text" 
                            placeholder="Quick search pool..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-slate-900 text-slate-100 text-xs px-2.5 py-1 rounded-lg border border-slate-800 focus:outline-none focus:border-emerald-500 max-w-[130px]"
                          />
                        </div>

                        <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/80 max-h-[450px] overflow-y-auto space-y-1.5">
                          {players
                            .filter(p => {
                              const fullName = `${p.firstName} ${p.lastName}`.toLowerCase();
                              return fullName.includes(searchTerm.toLowerCase()) || (p.jerseyNumber && p.jerseyNumber.includes(searchTerm));
                            })
                            .map(p => {
                              const isSelected = activeMatch.squad.includes(p.id);
                              return (
                                <div 
                                  key={p.id}
                                  onClick={() => togglePlayerInSquad(activeMatch.id, p.id)}
                                  className={`p-2.5 rounded-lg border transition duration-150 flex items-center justify-between cursor-pointer select-none ${
                                    isSelected 
                                      ? 'bg-emerald-950/20 border-emerald-500/40 text-slate-100' 
                                      : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-300'
                                  }`}
                                >
                                  <div>
                                    <span className="text-xs font-bold block">{p.firstName} {p.lastName}</span>
                                    <span className="text-[10px] text-slate-400">Jersey: {p.jerseyName || p.firstName} {p.jerseyNumber ? `(#${p.jerseyNumber})` : ''}</span>
                                  </div>

                                  <div className="flex items-center">
                                    <span className={`h-5 w-5 rounded-md flex items-center justify-center transition-all ${
                                      isSelected 
                                        ? 'bg-emerald-500 text-slate-950 font-bold text-xs' 
                                        : 'border border-slate-700 text-transparent'
                                    }`}>
                                      {isSelected ? '✓' : ''}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>

                    </div>
                  </>
                ) : (
                  <div className="text-center py-24 text-slate-500">
                    Please create a match or select one from the left-side panel to manage squad lineups.
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {}
        {selectedTab === 'ledger' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-100">Squad Financial Ledger</h2>
                <p className="text-slate-400 text-sm mt-1">Audit team match contributions, verify pending balances, and log overall player receipts.</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={exportLedgerToCSV}
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-750 text-slate-200 font-bold rounded-xl text-sm border border-slate-700 transition flex items-center space-x-1.5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  <span>Export to Excel/CSV</span>
                </button>
              </div>
            </div>

            {/* Overall Dues Summary Widgets */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Roster Total Unpaid</span>
                <div className="text-2xl font-black text-rose-400 mt-1">${globalStats.totalOutstanding}</div>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Roster Total Settled</span>
                <div className="text-2xl font-black text-emerald-400 mt-1">${globalStats.totalCollected}</div>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Unpaid Players Count</span>
                <div className="text-2xl font-black text-amber-400 mt-1">
                  {Object.values(playerBalances).filter(b => b.netDue > 0).length} of {players.length}
                </div>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Play Registrations</span>
                <div className="text-2xl font-black text-slate-200 mt-1">
                  {players.filter(p => p.registered).length} / {players.length} Active
                </div>
              </div>
            </div>

            {/* Filter and Table Card */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
              
              {/* Internal filters */}
              <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2 w-full md:w-auto">
                  {[
                    { id: 'all', label: 'All Squad Accounts' },
                    { id: 'outstanding', label: 'Outstanding Balance Only' },
                    { id: 'clear', label: 'Paid & Clear Only' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setLedgerFilter(tab.id)}
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                        ledgerFilter === tab.id
                          ? 'bg-emerald-500 text-slate-950'
                          : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="w-full md:w-72">
                  <input 
                    type="text" 
                    placeholder="Search ledger by player name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-slate-900 text-slate-100 text-xs px-3 py-2 rounded-lg border border-slate-800 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Ledger Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-slate-400 text-xs uppercase tracking-wider border-b border-slate-800">
                      <th className="py-4 px-6 font-bold">Player Name</th>
                      <th className="py-4 px-6 font-bold text-center">Jersey Specs</th>
                      <th className="py-4 px-6 font-bold text-center">Matches Play Count</th>
                      <th className="py-4 px-6 font-bold text-right">Incurred Share ($)</th>
                      <th className="py-4 px-6 font-bold text-right">Settled Amount ($)</th>
                      <th className="py-4 px-6 font-bold text-right">Remaining Due ($)</th>
                      <th className="py-4 px-6 font-bold text-center">Action Settle</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300 text-sm">
                    {Object.values(playerBalances)
                      .filter(b => {
                        // Search
                        const fullName = `${b.player.firstName} ${b.player.lastName}`.toLowerCase();
                        const matchesSearch = fullName.includes(searchTerm.toLowerCase());
                        
                        // Status filter
                        if (ledgerFilter === 'outstanding') {
                          return matchesSearch && b.netDue > 0;
                        }
                        if (ledgerFilter === 'clear') {
                          return matchesSearch && b.netDue === 0;
                        }
                        return matchesSearch;
                      })
                      .sort((a, b) => b.netDue - a.netDue || b.player.firstName.localeCompare(a.player.firstName))
                      .map(pBal => {
                        const name = `${pBal.player.firstName} ${pBal.player.lastName}`;
                        return (
                          <tr key={pBal.player.id} className="hover:bg-slate-900/40 transition-colors">
                            <td className="py-4 px-6 font-bold text-slate-200">
                              <div>
                                <span className="block">{name}</span>
                                <span className="text-slate-500 text-xs block">{pBal.player.email}</span>
                              </div>
                            </td>
                            <td className="py-4 px-6 text-center text-xs">
                              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                                {pBal.player.jerseyName || 'No Name'} #{pBal.player.jerseyNumber || '--'}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-center font-bold text-slate-100">
                              {pBal.matchesPlayed} Matches
                            </td>
                            <td className="py-4 px-6 text-right font-semibold text-slate-300">
                              ${pBal.totalOwed.toFixed(2)}
                            </td>
                            <td className="py-4 px-6 text-right font-semibold text-emerald-400">
                              ${pBal.totalPaid.toFixed(2)}
                            </td>
                            <td className={`py-4 px-6 text-right font-bold ${pBal.netDue > 0 ? 'text-rose-400' : 'text-slate-400'}`}>
                              ${pBal.netDue.toFixed(2)}
                            </td>
                            <td className="py-4 px-6 text-center">
                              {pBal.netDue > 0 ? (
                                <button
                                  onClick={() => {
                                    if (confirm(`Do you want to settle the complete outstanding balance of $${pBal.netDue.toFixed(2)} for ${pBal.player.firstName}?`)) {
                                      recordGeneralPayment(pBal.player.id, pBal.netDue);
                                    }
                                  }}
                                  className="px-3 py-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-lg transition"
                                >
                                  Settle All
                                </button>
                              ) : (
                                <span className="text-emerald-500 text-xs font-bold flex items-center justify-center space-x-1">
                                  <span>✓ Fully Paid</span>
                                </span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {}
        {selectedTab === 'roster' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-100">Roster Directory & Settings</h2>
                <p className="text-slate-400 text-sm mt-1">Manage registration statuses, details, emails, and numbers from CricClubs roster.</p>
              </div>
              <button
                onClick={() => { setEditingPlayer(null); setIsPlayerModalOpen(true); }}
                className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-sm shadow-lg shadow-emerald-500/10 flex items-center justify-center space-x-1.5 transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                <span>Add New Player</span>
              </button>
            </div>

            {/* Roster Controls Panel */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                <div className="flex space-x-2 w-full sm:w-auto">
                  {[
                    { id: 'all', label: 'All Squad Roster' },
                    { id: 'registered', label: 'SRCA Registered' },
                    { id: 'unregistered', label: 'Guest Roster' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setRosterFilter(tab.id)}
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                        rosterFilter === tab.id
                          ? 'bg-emerald-500 text-slate-950'
                          : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="w-full sm:w-72">
                  <input 
                    type="text" 
                    placeholder="Search player details..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-slate-900 text-slate-100 text-xs px-3 py-2 rounded-lg border border-slate-800 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Roster Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {players
                  .filter(p => {
                    // Search
                    const fullName = `${p.firstName} ${p.lastName}`.toLowerCase();
                    const email = (p.email || '').toLowerCase();
                    const city = (p.city || '').toLowerCase();
                    const matchText = fullName.includes(searchTerm.toLowerCase()) || email.includes(searchTerm.toLowerCase()) || city.includes(searchTerm.toLowerCase());

                    // Filter Tab
                    if (rosterFilter === 'registered') {
                      return matchText && p.registered;
                    }
                    if (rosterFilter === 'unregistered') {
                      return matchText && !p.registered;
                    }
                    return matchText;
                  })
                  .map(p => (
                    <div key={p.id} className="bg-slate-900 border border-slate-800/80 rounded-xl p-5 hover:border-slate-700/80 transition-all flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-extrabold text-slate-100 text-base">{p.firstName} {p.lastName}</h4>
                            <p className="text-xs text-slate-400 mt-1">ID on CricClubs: <span className="font-mono text-slate-300">{p.id}</span></p>
                          </div>
                          
                          {p.jerseyNumber ? (
                            <span className="h-8 w-8 rounded-lg bg-emerald-500/10 text-emerald-400 font-black flex items-center justify-center border border-emerald-500/20" title={`Jersey Number: ${p.jerseyNumber}`}>
                              {p.jerseyNumber}
                            </span>
                          ) : (
                            <span className="text-xs text-slate-500 px-2 py-1 rounded bg-slate-950 border border-slate-800">No #</span>
                          )}
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2 text-xs">
                          <div className="flex justify-between">
                            <span className="text-slate-500">Jersey Name:</span>
                            <span className="text-slate-300 font-bold">{p.jerseyName || 'None'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">Email:</span>
                            <span className="text-slate-300 font-mono truncate max-w-[170px]" title={p.email}>{p.email || 'None'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">City Residence:</span>
                            <span className="text-slate-300">{p.city || 'None'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">SRCA Member?</span>
                            <span className={`font-bold ${p.registered ? 'text-emerald-400' : 'text-slate-400'}`}>
                              {p.registered ? 'Registered ✓' : 'Not Registered'}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 mt-5 pt-3 border-t border-slate-800">
                        <button
                          onClick={() => startEditPlayer(p)}
                          className="flex-1 py-1.5 bg-slate-850 hover:bg-slate-800 text-slate-300 hover:text-white font-bold text-xs rounded-lg transition border border-slate-750"
                        >
                          Edit Player
                        </button>
                        <button
                          onClick={() => deletePlayer(p.id)}
                          className="p-2 hover:bg-rose-500/10 text-slate-500 hover:text-rose-400 rounded-lg transition border border-transparent hover:border-rose-500/20"
                          title="Remove player"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

      </main>

      {}
      {isPlayerModalOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl relative">
            <h3 className="text-lg font-bold text-slate-100 mb-4">
              {editingPlayer ? 'Edit Player Account' : 'Add New Roster Player'}
            </h3>

            <form onSubmit={handlePlayerSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">First Name *</label>
                  <input
                    type="text"
                    value={playerForm.firstName}
                    onChange={e => setPlayerForm({ ...playerForm, firstName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:outline-none rounded-lg p-2 text-sm text-slate-200"
                    placeholder="Adwait"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Last Name *</label>
                  <input
                    type="text"
                    value={playerForm.lastName}
                    onChange={e => setPlayerForm({ ...playerForm, lastName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:outline-none rounded-lg p-2 text-sm text-slate-200"
                    placeholder="Umbarkar"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Jersey Name</label>
                  <input
                    type="text"
                    maxLength={10}
                    value={playerForm.jerseyName}
                    onChange={e => setPlayerForm({ ...playerForm, jerseyName: e.target.value.toUpperCase() })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:outline-none rounded-lg p-2 text-sm text-slate-200"
                    placeholder="ADWAIT"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Jersey Number (00-99)</label>
                  <input
                    type="text"
                    value={playerForm.jerseyNumber}
                    onChange={e => setPlayerForm({ ...playerForm, jerseyNumber: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:outline-none rounded-lg p-2 text-sm text-slate-200"
                    placeholder="27"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-400 block mb-1">Email Address</label>
                <input
                  type="email"
                  value={playerForm.email}
                  onChange={e => setPlayerForm({ ...playerForm, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:outline-none rounded-lg p-2 text-sm text-slate-200"
                  placeholder="name@example.com"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">City</label>
                  <input
                    type="text"
                    value={playerForm.city}
                    onChange={e => setPlayerForm({ ...playerForm, city: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:outline-none rounded-lg p-2 text-sm text-slate-200"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">SRCA Registration</label>
                  <select
                    value={playerForm.registered ? "true" : "false"}
                    onChange={e => setPlayerForm({ ...playerForm, registered: e.target.value === "true" })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:outline-none rounded-lg p-2 text-sm text-slate-200"
                  >
                    <option value="true">Registered (Verified)</option>
                    <option value="false">Unregistered/Guest</option>
                  </select>
                </div>
              </div>

              <div className="flex space-x-2 pt-4 border-t border-slate-800 mt-6">
                <button
                  type="button"
                  onClick={() => setIsPlayerModalOpen(false)}
                  className="flex-1 py-2 bg-slate-850 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-sm font-bold rounded-lg transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-bold rounded-lg transition"
                >
                  {editingPlayer ? 'Save Changes' : 'Create Player'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {}
      {isMatchModalOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl relative">
            <h3 className="text-lg font-bold text-slate-100 mb-4">
              {editingMatch ? 'Edit Match Parameters' : 'Create New Match Entry'}
            </h3>

            <form onSubmit={handleMatchSubmit} className="space-y-4">
              <div>
                <label className="text-xs text-slate-400 block mb-1">Opponent Team *</label>
                <input
                  type="text"
                  value={matchForm.opponent}
                  onChange={e => setMatchForm({ ...matchForm, opponent: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:outline-none rounded-lg p-2 text-sm text-slate-200"
                  placeholder="Silicon Valley CC"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Date *</label>
                  <input
                    type="date"
                    value={matchForm.date}
                    onChange={e => setMatchForm({ ...matchForm, date: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:outline-none rounded-lg p-2 text-sm text-slate-200"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Venue Field</label>
                  <input
                    type="text"
                    value={matchForm.venue}
                    onChange={e => setMatchForm({ ...matchForm, venue: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:outline-none rounded-lg p-2 text-sm text-slate-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Total Match Fee ($)</label>
                  <input
                    type="number"
                    value={matchForm.totalFee}
                    onChange={e => setMatchForm({ ...matchForm, totalFee: Number(e.target.value) })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:outline-none rounded-lg p-2 text-sm text-slate-200"
                    min="0"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Match Cost Split Method</label>
                  <select
                    value={matchForm.splitType}
                    onChange={e => setMatchForm({ ...matchForm, splitType: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:outline-none rounded-lg p-2 text-sm text-slate-200"
                  >
                    <option value="equal">Equal Split (per selected player)</option>
                    <option value="flat">Flat Rate Per Selected Player</option>
                  </select>
                </div>
              </div>

              {matchForm.splitType === 'flat' && (
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Flat Rate fee Per Player ($)</label>
                  <input
                    type="number"
                    value={matchForm.flatFeePerPlayer}
                    onChange={e => setMatchForm({ ...matchForm, flatFeePerPlayer: Number(e.target.value) })}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:outline-none rounded-lg p-2 text-sm text-slate-200"
                    min="0"
                  />
                </div>
              )}

              <div>
                <label className="text-xs text-slate-400 block mb-1">Match Status Completion</label>
                <select
                  value={matchForm.completed ? "true" : "false"}
                  onChange={e => setMatchForm({ ...matchForm, completed: e.target.value === "true" })}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:outline-none rounded-lg p-2 text-sm text-slate-200"
                >
                  <option value="false">Scheduled / Upcoming</option>
                  <option value="true">Finished / Completed</option>
                </select>
              </div>

              <div className="flex space-x-2 pt-4 border-t border-slate-800 mt-6">
                <button
                  type="button"
                  onClick={() => setIsMatchModalOpen(false)}
                  className="flex-1 py-2 bg-slate-850 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-sm font-bold rounded-lg transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-bold rounded-lg transition"
                >
                  {editingMatch ? 'Save Match' : 'Add Match'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {}
      <footer className="border-t border-slate-800 bg-slate-950 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-slate-500">
          <p>© 2026 SRCA League - Summer Season Squad Planner & Due Tracker.</p>
          <p className="mt-1">Designed for optimized matchday lineup selections and transparent share distribution audits.</p>
        </div>
      </footer>

    </div>
  );
}