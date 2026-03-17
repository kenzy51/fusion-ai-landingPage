export default function PrivacyPolicy() {
  return (
    <main className="bg-[#09090b] min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto prose prose-invert prose-zinc prose-sm md:prose-base">
        <h1 className="text-white text-4xl mb-8">Data & Security Policy</h1>

        <h2 className="text-white">1. Neural Voice Security</h2>
        <p>
          Fusion AI utilizes ElevenLabs&apos; encrypted infrastructure for voice
          cloning. Audio samples used for training are processed in a secure
          environment and are only accessible by the Practice owner.
        </p>

        <h2 className="text-white">2. Call Recording & Transcripts</h2>
        <p>
          In accordance with New York one-party consent laws, Fusion AI provides
          recording and transcription services. Transcripts are generated via
          deep-learning models and stored using AES-256 encryption.
        </p>

        <h2 className="text-white">3. HIPAA-Ready Framework</h2>
        <p>
          Our technical stack—including Groq, Deepgram, and SendGrid—is
          architected with data privacy as a priority. We implement strict
          access controls to ensure patient summaries and contact details are
          handled securely.
        </p>
      </div>
    </main>
  );
}
