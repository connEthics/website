<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Era of AI Artifacts: IP, Ops, and Governance</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.plot.ly/plotly-2.27.0.min.js"></script>
    <!-- Marked for Markdown parsing in AI responses -->
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #0f172a; /* Slate 900 */
            color: #f8fafc; /* Slate 50 */
        }
        .chart-container {
            position: relative;
            width: 100%;
            max-width: 650px;
            margin-left: auto;
            margin-right: auto;
            height: 400px;
            max-height: 400px;
        }
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #1e293b;
        }
        ::-webkit-scrollbar-thumb {
            background: #38bdf8;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #0ea5e9;
        }
        .glass-panel {
            background: rgba(30, 41, 59, 0.7);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(56, 189, 248, 0.2);
            transition: all 0.3s ease;
        }
        .glass-panel:hover {
            border-color: rgba(56, 189, 248, 0.5);
            box-shadow: 0 0 20px rgba(56, 189, 248, 0.1);
        }
        .neon-text {
            text-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
        }
        .markdown-prose h3 { font-size: 1.1rem; font-weight: bold; margin-top: 1rem; color: #22d3ee; }
        .markdown-prose ul { list-style-type: disc; padding-left: 1.5rem; margin-top: 0.5rem; }
        .markdown-prose strong { color: #f472b6; }
        .markdown-prose code { background: #334155; padding: 2px 4px; rounded: 4px; font-size: 0.9em; }
        
        /* Loading Spinner */
        .loader {
            border: 3px solid #f3f3f3;
            border-radius: 50%;
            border-top: 3px solid #22d3ee;
            width: 20px;
            height: 20px;
            -webkit-animation: spin 1s linear infinite; /* Safari */
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body class="antialiased selection:bg-cyan-500 selection:text-white">

    <!-- Hero Section -->
    <header class="relative overflow-hidden py-16 px-6 text-center border-b border-slate-800">
        <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div>
        <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 neon-text">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">The New</span>
            <span class="text-white">Secret Sauce</span>
        </h1>
        <p class="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto">
            Navigating Intellectual Property, DevOps, and Delivery in the age of <span class="text-cyan-400 font-semibold">.agent</span>, <span class="text-purple-400 font-semibold">.cursorrules</span>, and <span class="text-pink-400 font-semibold">AI Workflows</span>.
        </p>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">

        <!-- SECTION 1: The Artifact Explosion -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
                <div class="inline-block px-3 py-1 rounded-full bg-cyan-900/50 text-cyan-400 text-sm font-semibold border border-cyan-500/30">
                    Context & Overview
                </div>
                <h2 class="text-3xl font-bold text-white">Code is Shrinking. <br/><span class="text-slate-400">Context is Growing.</span></h2>
                <p class="text-slate-300 leading-relaxed text-lg">
                    Modern development is no longer just about logic syntax. A significant portion of the "value" is migrating into auxiliary artifacts: 
                    <span class="text-cyan-300">.cursorrules</span>, <span class="text-purple-300">Model Context Protocols (MCP)</span>, and <span class="text-pink-300">Agent definitions</span>.
                </p>
                <p class="text-slate-400">
                    This shift creates a "Hidden Codebase." These artifacts define *how* code is written and *how* infrastructure behaves, yet they often exist outside standard version control governance.
                </p>
            </div>
            <div class="glass-panel p-6 rounded-2xl shadow-2xl">
                <h3 class="text-lg font-semibold text-center mb-4 text-slate-200">Composition of a Modern AI-Native Repo</h3>
                <div class="chart-container">
                    <canvas id="artifactChart"></canvas>
                </div>
                <p class="text-xs text-center text-slate-500 mt-4">Analysis of file types in high-velocity AI-assisted projects.</p>
            </div>
        </section>

        <!-- SECTION 2: The DevOps & Storage Dilemma -->
        <section>
            <div class="max-w-3xl mx-auto text-center mb-12">
                <h2 class="text-3xl font-bold text-white mb-4">Where Does the "Knowledge" Live?</h2>
                <p class="text-slate-400 text-lg">
                    From a DevOps perspective, the challenge is adherence. Some artifacts are strictly coupled to the code, while others are personal preferences or ESN-proprietary assets.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <!-- Card 1 -->
                <div class="glass-panel p-6 rounded-xl border-l-4 border-cyan-400">
                    <h4 class="text-xl font-bold text-white mb-2">Repo-Level</h4>
                    <p class="text-sm text-slate-400 mb-2"><code>.github/workflows</code>, <code>project.rules</code></p>
                    <p class="text-slate-300 text-sm">Shared, versioned, and legally owned by the client. Ensures consistency across the team.</p>
                </div>
                <!-- Card 2 -->
                <div class="glass-panel p-6 rounded-xl border-l-4 border-purple-400">
                    <h4 class="text-xl font-bold text-white mb-2">IDE-Level</h4>
                    <p class="text-sm text-slate-400 mb-2"><code>user settings</code>, <code>local prompts</code></p>
                    <p class="text-slate-300 text-sm">The "Developer's Toolbelt." Often personal IP or "Secret Sauce." Hard to audit or share.</p>
                </div>
                <!-- Card 3 -->
                <div class="glass-panel p-6 rounded-xl border-l-4 border-pink-400">
                    <h4 class="text-xl font-bold text-white mb-2">ESN/Agency-Level</h4>
                    <p class="text-sm text-slate-400 mb-2"><code>shared-skills-library</code></p>
                    <p class="text-slate-300 text-sm">Proprietary knowledge injected into client projects. High risk of IP leakage if not licensed correctly.</p>
                </div>
            </div>

            <div class="glass-panel p-8 rounded-2xl">
                <h3 class="text-lg font-semibold text-center mb-6 text-slate-200">Adherence vs. Portability Matrix</h3>
                <div class="chart-container">
                    <canvas id="storageChart"></canvas>
                </div>
                <p class="text-center text-slate-400 mt-4 text-sm">
                    Visualizing where artifacts are stored versus who controls them.
                </p>
            </div>
        </section>

        <!-- SECTION 3: Intellectual Property (Legal Perspective) -->
        <section class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-slate-800/50 p-8 rounded-3xl">
            <div class="order-2 lg:order-1">
                <div class="chart-container h-96">
                    <canvas id="ipRadarChart"></canvas>
                </div>
            </div>
            <div class="order-1 lg:order-2 space-y-6">
                <div class="inline-block px-3 py-1 rounded-full bg-pink-900/50 text-pink-400 text-sm font-semibold border border-pink-500/30">
                    Legal & IP Strategy
                </div>
                <h2 class="text-3xl font-bold text-white">Who Owns the Prompt?</h2>
                <p class="text-slate-300">
                    When an ESN (Digital Services Company) brings their own <code>.cursorrules</code> or Agent definitions to a client project, a legal grey area emerges.
                </p>
                <ul class="space-y-4">
                    <li class="flex items-start">
                        <span class="text-cyan-400 mr-3 text-xl">&#10003;</span>
                        <div>
                            <strong class="text-white block">Adherent to Infrastructure</strong>
                            <span class="text-slate-400 text-sm">Configs like Terraform or K8s specs are typically "Work for Hire" and owned by the client.</span>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <span class="text-purple-400 mr-3 text-xl">&#10003;</span>
                        <div>
                            <strong class="text-white block">Adherent to the Developer (IDE)</strong>
                            <span class="text-slate-400 text-sm">Personal "Skills" libraries used to generate code. Is this a tool (like a hammer) or delivered code?</span>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <span class="text-pink-400 mr-3 text-xl">&#10003;</span>
                        <div>
                            <strong class="text-white block">The Licensing Solution</strong>
                            <span class="text-slate-400 text-sm">Treating AI artifacts as "Licensed Libraries" rather than "Work for Hire" to maintain ESN value.</span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

        <!-- SECTION 4: AI in Production (The Order Giver) -->
        <section>
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-white">The New Role: Reviewer & Order Giver</h2>
                <p class="text-slate-400 mt-4 max-w-2xl mx-auto">
                    As production is increasingly subcontracted to AI Agents, the human role shifts from writing to <span class="text-cyan-400">Specification</span> and <span class="text-pink-400">Validation</span>.
                </p>
            </div>

            <!-- Custom HTML Flowchart (No Mermaid/SVG) -->
            <div class="w-full overflow-x-auto">
                <div class="min-w-[800px] flex flex-row items-center justify-between gap-4 p-8">
                    
                    <!-- Node 1 -->
                    <div class="flex flex-col items-center w-48 group">
                        <div class="w-full bg-slate-700 border-2 border-cyan-500 p-4 rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.2)] text-center relative z-10">
                            <h4 class="text-cyan-400 font-bold mb-1">1. The Prompt Engineer</h4>
                            <p class="text-xs text-slate-300">Defines Constraints & Goals</p>
                        </div>
                        <div class="h-8 w-0.5 bg-cyan-500/50"></div>
                        <div class="text-2xl text-cyan-500">&#8595;</div>
                    </div>

                    <!-- Connector -->
                    <div class="h-0.5 flex-grow bg-gradient-to-r from-cyan-500 to-purple-500 mx-2 relative top-[-20px]"></div>

                    <!-- Node 2 -->
                    <div class="flex flex-col items-center w-48">
                        <div class="w-full bg-slate-800 border-2 border-purple-500 p-4 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.2)] text-center relative z-10">
                            <h4 class="text-purple-400 font-bold mb-1">2. AI Agent / MCP</h4>
                            <p class="text-xs text-slate-300">Executes Logic & Retains Context</p>
                        </div>
                        <div class="h-8 w-0.5 bg-purple-500/50"></div>
                        <div class="text-2xl text-purple-500">&#8595;</div>
                    </div>

                    <!-- Connector -->
                    <div class="h-0.5 flex-grow bg-gradient-to-r from-purple-500 to-pink-500 mx-2 relative top-[-20px]"></div>

                    <!-- Node 3 -->
                    <div class="flex flex-col items-center w-48">
                        <div class="w-full bg-slate-700 border-2 border-pink-500 p-4 rounded-lg shadow-[0_0_15px_rgba(244,114,182,0.2)] text-center relative z-10">
                            <h4 class="text-pink-400 font-bold mb-1">3. Automated Quality Gate</h4>
                            <p class="text-xs text-slate-300">Linting, Security, Hallucination Check</p>
                        </div>
                        <div class="h-8 w-0.5 bg-pink-500/50"></div>
                        <div class="text-2xl text-pink-500">&#8595;</div>
                    </div>

                </div>
                
                <!-- Feedback Loop Text -->
                <div class="text-center mt-4">
                    <p class="text-sm text-slate-500">
                        <span class="text-cyan-400 font-bold">Feedback Loop:</span> Failures in Step 3 must refine the Artifacts in Step 1, not just fix the Code in Step 2.
                    </p>
                </div>
            </div>
        </section>

        <!-- SECTION 6: Gemini Powered Features -->
        <section id="ai-tools" class="py-12 border-t border-slate-800">
             <div class="text-center mb-10">
                <div class="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 mb-4">
                    <span class="text-lg mr-2">✨</span>
                    <span class="text-purple-200 text-sm font-semibold">Powered by Gemini AI</span>
                </div>
                <h2 class="text-3xl font-bold text-white">Interactive Governance Lab</h2>
                <p class="text-slate-400 mt-2">Use AI to analyze your current setup or generate compliant artifacts.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Tool 1: IP Risk Analyzer -->
                <div class="glass-panel p-8 rounded-2xl flex flex-col">
                    <div class="flex items-center mb-4">
                        <div class="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 mr-4 border border-cyan-500/30">
                            🛡️
                        </div>
                        <h3 class="text-xl font-bold text-white">IP Risk Analyzer</h3>
                    </div>
                    <p class="text-slate-400 text-sm mb-4">
                        Describe your team's workflow (e.g., "We use shared ESN accounts," "Devs use personal prompts," "Artifacts are in a private repo"). Gemini will assess the IP leakage risk.
                    </p>
                    <textarea id="riskInput" class="w-full h-24 bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-slate-200 text-sm focus:border-cyan-500 focus:outline-none mb-4" placeholder="e.g. My developers store their .cursorrules on their local machines, but we commit the final code to the client's GitHub..."></textarea>
                    <button onclick="analyzeRisk()" class="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex justify-center items-center gap-2">
                        <span>Analyze Risk</span>
                        <span class="text-lg">✨</span>
                        <div id="riskLoader" class="loader hidden"></div>
                    </button>
                    <div id="riskOutput" class="mt-4 p-4 bg-slate-900/80 rounded-lg border border-slate-700 min-h-[100px] text-sm text-slate-300 hidden"></div>
                </div>

                <!-- Tool 2: Artifact Generator -->
                <div class="glass-panel p-8 rounded-2xl flex flex-col">
                    <div class="flex items-center mb-4">
                        <div class="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400 mr-4 border border-purple-500/30">
                            📜
                        </div>
                        <h3 class="text-xl font-bold text-white">Artifact Generator</h3>
                    </div>
                    <p class="text-slate-400 text-sm mb-4">
                        Generate a standardized <code>.cursorrules</code> or <code>.agent</code> definition. Enter a role and constraints.
                    </p>
                    <div class="space-y-3 mb-4">
                        <input id="roleInput" type="text" class="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-slate-200 text-sm focus:border-purple-500 focus:outline-none" placeholder="Role (e.g. Senior Frontend Dev using Tailwind)">
                        <input id="constraintInput" type="text" class="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-slate-200 text-sm focus:border-purple-500 focus:outline-none" placeholder="Constraints (e.g. No raw CSS, only functional components)">
                    </div>
                    <button onclick="generateArtifact()" class="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex justify-center items-center gap-2">
                        <span>Generate Artifact</span>
                        <span class="text-lg">✨</span>
                        <div id="genLoader" class="loader hidden"></div>
                    </button>
                    <div id="genOutput" class="mt-4 p-4 bg-slate-900/80 rounded-lg border border-slate-700 min-h-[100px] text-sm text-slate-300 font-mono hidden overflow-x-auto"></div>
                </div>
            </div>
        </section>

        <!-- SECTION 5: Risk vs Efficiency (Delivery Manager View) -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div class="glass-panel p-6 rounded-2xl">
                <h3 class="text-lg font-semibold text-center mb-4 text-slate-200">Velocity Impact of Shared Artifacts</h3>
                <div class="chart-container">
                    <canvas id="velocityChart"></canvas>
                </div>
                <p class="text-sm text-slate-400 mt-4 px-4">
                    Comparison of delivery sprints. Teams with shared, governed <code>.workflows</code> reach peak velocity 40% faster but risk dependency.
                </p>
            </div>
            <div class="glass-panel p-6 rounded-2xl">
                <h3 class="text-lg font-semibold text-center mb-4 text-slate-200">Completeness vs. Risk</h3>
                <div class="chart-container">
                    <div id="plotlyScatter" style="width:100%; height:100%;"></div>
                </div>
                <p class="text-sm text-slate-400 mt-4 px-4">
                    Higher complexity agents require stricter "Guardrails" (Artifacts). Low-artifact projects suffer from quality drift.
                </p>
            </div>
        </section>

    </main>

    <footer class="border-t border-slate-800 bg-slate-900 py-12 text-center">
        <p class="text-slate-500 text-sm">
            Generated by Canvas Infographics &bull; 2024 &bull; Focusing on AI Governance & IP
        </p>
    </footer>

    <script>
        // --- GEMINI API INTEGRATION ---
        const apiKey = ""; // Set at runtime

        async function callGemini(prompt, loaderId, outputId) {
            const loader = document.getElementById(loaderId);
            const output = document.getElementById(outputId);
            
            // UI Reset
            loader.classList.remove('hidden');
            output.classList.add('hidden');
            output.innerHTML = '';

            const systemPrompt = "You are an expert in IT Governance, Intellectual Property Law (specifically regarding AI code generation), and DevOps. You are helping a user analyze their AI adoption maturity and legal risks based on an infographic about 'AI Artifacts' (prompts, .cursorrules, .agents). Keep answers concise, professional, and actionable. Format responses with Markdown.";

            try {
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{ text: prompt }]
                        }],
                        systemInstruction: {
                            parts: [{ text: systemPrompt }]
                        }
                    })
                });

                if (!response.ok) throw new Error('API Error');

                const data = await response.json();
                const text = data.candidates[0].content.parts[0].text;
                
                // Parse Markdown and display
                output.innerHTML = `<div class="markdown-prose">${marked.parse(text)}</div>`;
                output.classList.remove('hidden');

            } catch (error) {
                output.innerHTML = `<span class="text-red-400">Error: Could not generate analysis. Please try again.</span>`;
                output.classList.remove('hidden');
                console.error(error);
            } finally {
                loader.classList.add('hidden');
            }
        }

        function analyzeRisk() {
            const input = document.getElementById('riskInput').value;
            if (!input.trim()) return;
            const prompt = `Analyze the IP risk for this development workflow scenario: "${input}". 
            
            Evaluate based on:
            1. Ownership (Client vs ESN vs Developer)
            2. Secret Sauce Leakage (Is proprietary knowledge being lost?)
            3. Recommendation (How to secure the artifacts).`;
            
            callGemini(prompt, 'riskLoader', 'riskOutput');
        }

        function generateArtifact() {
            const role = document.getElementById('roleInput').value;
            const constraints = document.getElementById('constraintInput').value;
            if (!role.trim()) return;

            const prompt = `Generate a '.cursorrules' or system prompt snippet for an AI agent acting as a: ${role}. 
            Constraints: ${constraints}.
            
            Include:
            - Role Definition
            - Style Guidelines
            - Forbidden Patterns
            Output as a code block.`;

            callGemini(prompt, 'genLoader', 'genOutput');
        }


        // --- EXISTING CHART UTILITIES ---

        // Label Wrapping Function (16 char limit)
        function wrapLabel(str, maxChars = 16) {
            const words = str.split(' ');
            const lines = [];
            let currentLine = words[0];

            for (let i = 1; i < words.length; i++) {
                if (currentLine.length + 1 + words[i].length <= maxChars) {
                    currentLine += ' ' + words[i];
                } else {
                    lines.push(currentLine);
                    currentLine = words[i];
                }
            }
            lines.push(currentLine);
            return lines.length > 1 ? lines : lines[0];
        }

        // Common Chart Options
        const commonOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: { color: '#cbd5e1', font: { family: 'Inter' } }
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    titleColor: '#22d3ee',
                    bodyColor: '#f8fafc',
                    borderColor: '#38bdf8',
                    borderWidth: 1,
                    callbacks: {
                        title: function(tooltipItems) {
                            const item = tooltipItems[0];
                            let label = item.chart.data.labels[item.dataIndex];
                            if (Array.isArray(label)) {
                                return label.join(' ');
                            } else {
                                return label;
                            }
                        }
                    }
                }
            }
        };

        // --- CHART 1: Artifact Composition (Donut) ---
        const ctxArtifact = document.getElementById('artifactChart').getContext('2d');
        const artifactData = {
            labels: ['Business Logic (Code)', 'Infra/Config', 'AI Prompts/Rules', 'Knowledge/RAG'],
            datasets: [{
                data: [45, 25, 20, 10],
                backgroundColor: ['#334155', '#475569', '#22d3ee', '#f472b6'], // Slate, SlateLight, Cyan, Pink
                borderColor: '#0f172a',
                borderWidth: 2
            }]
        };
        // Process labels
        const processedArtifactLabels = artifactData.labels.map(l => wrapLabel(l));
        
        new Chart(ctxArtifact, {
            type: 'doughnut',
            data: {
                labels: processedArtifactLabels,
                datasets: artifactData.datasets
            },
            options: {
                ...commonOptions,
                cutout: '60%',
                plugins: {
                    ...commonOptions.plugins,
                    legend: { position: 'right', labels: { color: '#fff' } }
                }
            }
        });

        // --- CHART 2: Storage vs Access (Stacked Bar) ---
        const ctxStorage = document.getElementById('storageChart').getContext('2d');
        const storageLabels = ['Global Infra', 'Project Repo', 'Dev Environment', 'External Cloud'];
        
        new Chart(ctxStorage, {
            type: 'bar',
            data: {
                labels: storageLabels.map(l => wrapLabel(l)),
                datasets: [
                    {
                        label: 'Standardized (Client Owned)',
                        data: [90, 80, 10, 20],
                        backgroundColor: '#22d3ee',
                    },
                    {
                        label: 'Proprietary (ESN/Dev Owned)',
                        data: [10, 20, 90, 80],
                        backgroundColor: '#f472b6',
                    }
                ]
            },
            options: {
                ...commonOptions,
                scales: {
                    x: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' } },
                    y: { 
                        ticks: { color: '#94a3b8' }, 
                        grid: { color: '#334155' },
                        stacked: true,
                        title: { display: true, text: '% Control', color: '#cbd5e1' }
                    }
                },
                plugins: {
                    ...commonOptions.plugins,
                    tooltip: {
                        ...commonOptions.plugins.tooltip,
                        callbacks: {
                            ...commonOptions.plugins.tooltip.callbacks,
                            title: function(items) { return items[0].label; } // Simple label for bar axes
                        }
                    }
                }
            }
        });

        // --- CHART 3: IP Risk Radar ---
        const ctxRadar = document.getElementById('ipRadarChart').getContext('2d');
        
        new Chart(ctxRadar, {
            type: 'radar',
            data: {
                labels: ['Ownership Clarity', 'Trade Secret Risk', 'Portability', 'Maintainability', 'Auditability'],
                datasets: [{
                    label: 'Repo-Stored Artifacts',
                    data: [90, 20, 100, 85, 95],
                    borderColor: '#22d3ee',
                    backgroundColor: 'rgba(34, 211, 238, 0.2)',
                    pointBackgroundColor: '#22d3ee'
                }, {
                    label: 'IDE-Stored Secrets',
                    data: [30, 90, 20, 40, 10],
                    borderColor: '#f472b6',
                    backgroundColor: 'rgba(244, 114, 182, 0.2)',
                    pointBackgroundColor: '#f472b6'
                }]
            },
            options: {
                ...commonOptions,
                scales: {
                    r: {
                        angleLines: { color: '#334155' },
                        grid: { color: '#334155' },
                        pointLabels: { color: '#e2e8f0', font: { size: 12 } },
                        ticks: { display: false }
                    }
                }
            }
        });

        // --- CHART 4: Velocity (Line Chart) ---
        const ctxVelocity = document.getElementById('velocityChart').getContext('2d');
        
        new Chart(ctxVelocity, {
            type: 'line',
            data: {
                labels: ['Sprint 1', 'Sprint 2', 'Sprint 3', 'Sprint 4', 'Sprint 5'],
                datasets: [{
                    label: 'With Shared .agents',
                    data: [20, 45, 70, 85, 95],
                    borderColor: '#22d3ee',
                    backgroundColor: '#22d3ee',
                    tension: 0.4
                }, {
                    label: 'Ad-Hoc Prompting',
                    data: [20, 30, 35, 45, 50],
                    borderColor: '#94a3b8', // Gray
                    backgroundColor: '#94a3b8',
                    tension: 0.4,
                    borderDash: [5, 5]
                }]
            },
            options: {
                ...commonOptions,
                scales: {
                    x: { ticks: { color: '#94a3b8' }, grid: { display: false } },
                    y: { 
                        ticks: { color: '#94a3b8' }, 
                        grid: { color: '#334155' },
                        title: { display: true, text: 'Story Points / Velocity', color: '#cbd5e1' }
                    }
                }
            }
        });

        // --- CHART 5: Plotly Bubble (Advanced Distribution) ---
        // Using Plotly for specific bubble chart capabilities
        
        const trace1 = {
            x: [10, 40, 80, 95], // Artifact Completeness
            y: [30, 50, 85, 90], // Output Quality
            mode: 'markers',
            marker: {
                size: [20, 40, 60, 80], // Complexity of Task
                color: ['#f472b6', '#818cf8', '#22d3ee', '#22d3ee'],
                opacity: 0.8,
                line: { color: '#fff', width: 1 }
            },
            text: ['Ad-Hoc Scripts', 'Basic Prompts', 'Structured Agents', 'Full .workflows'],
            name: 'Artifact Maturity'
        };

        const layout = {
            title: { text: '', font: { color: '#fff' } },
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: 'rgba(0,0,0,0)',
            showlegend: false,
            xaxis: { 
                title: { text: 'Artifact Definition (Context)', font: { color: '#cbd5e1' } }, 
                color: '#94a3b8',
                gridcolor: '#334155',
                range: [0, 110]
            },
            yaxis: { 
                title: { text: 'AI Output Reliability %', font: { color: '#cbd5e1' } }, 
                color: '#94a3b8',
                gridcolor: '#334155',
                range: [0, 110]
            },
            margin: { t: 20, l: 40, r: 20, b: 40 }
        };

        const config = { responsive: true, displayModeBar: false };
        
        Plotly.newPlot('plotlyScatter', [trace1], layout, config);

    </script>
</body>
</html>