import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFingerprint, 
  FaRegFilePdf,
  FaMicrophone,
  FaShieldAlt
} from 'react-icons/fa';
import { 
  MdGesture, 
  MdPhotoCamera,
  MdAssignment 
} from 'react-icons/md';
import { 
  HiOutlineDocumentText 
} from 'react-icons/hi';
import { 
  GrScan 
} from 'react-icons/gr';

const Tools = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-[#00ff41]">InkSpector Verification Tools</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Comprehensive suite of AI-powered authentication technologies to combat digital forgery
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Deepfake Detection */}
          <Link to="/deepfake">
            <div className="h-full p-6 bg-gray-900 rounded-xl border border-gray-700 hover:border-[#00ff41] transition hover:shadow-lg hover:shadow-[#00ff41]/20">
              <div className="mb-4 text-3xl text-[#00ff41]"><MdPhotoCamera /></div>
              <h4 className="text-xl font-semibold mb-3">Deepfake Detection</h4>
              <p className="text-gray-400">
                Identifies AI-manipulated or tampered face images and videos using advanced convolutional neural networks that analyze pixel-level inconsistencies and temporal artifacts.
              </p>
            </div>
          </Link>

          {/* Card 2: Voice Authenticity */}
          <Link to="/voiceauthenticity">
            <div className="h-full p-6 bg-gray-900 rounded-xl border border-gray-700 hover:border-[#00ff41] transition hover:shadow-lg hover:shadow-[#00ff41]/20">
              <div className="mb-4 text-3xl text-[#00ff41]"><FaMicrophone /></div>
              <h4 className="text-xl font-semibold mb-3">Voice Authenticity Analysis</h4>
              <p className="text-gray-400">
                Detects synthetic or cloned voice recordings through audio feature extraction and classification models, distinguishing real human speech from AI-generated audio.
              </p>
            </div>
          </Link>

          {/* Card 3: Bio Authenticity */}
          <Link to="/bioauthenticity">
            <div className="h-full p-6 bg-gray-900 rounded-xl border border-gray-700 hover:border-[#00ff41] transition hover:shadow-lg hover:shadow-[#00ff41]/20">
              <div className="mb-4 text-3xl text-[#00ff41]"><FaFingerprint /></div>
              <h4 className="text-xl font-semibold mb-3">Bio/Profile Originality</h4>
              <p className="text-gray-400">
                Uses natural language processing to compare user bios and profiles against known datasets, detecting copied or AI-generated text to flag suspicious identities.
              </p>
            </div>
          </Link>

          {/* Card 4: Metadata Verification */}
          <Link to="/metaverification">
            <div className="h-full p-6 bg-gray-900 rounded-xl border border-gray-700 hover:border-[#00ff41] transition hover:shadow-lg hover:shadow-[#00ff41]/20">
              <div className="mb-4 text-3xl text-[#00ff41]"><GrScan /></div>
              <h4 className="text-xl font-semibold mb-3">Metadata Integrity</h4>
              <p className="text-gray-400">
                Examines file metadata such as EXIF data in images or documents for inconsistencies and signs of tampering, adding an extra layer of authenticity validation.
              </p>
            </div>
          </Link>

          {/* Card 5: Document Verification */}
          <Link to="/documentverification">
            <div className="h-full p-6 bg-gray-900 rounded-xl border border-gray-700 hover:border-[#00ff41] transition hover:shadow-lg hover:shadow-[#00ff41]/20">
              <div className="mb-4 text-3xl text-[#00ff41]"><MdAssignment /></div>
              <h4 className="text-xl font-semibold mb-3">Document Verification</h4>
              <p className="text-gray-400">
                Employs OCR, format analysis, and forgery detection techniques to validate the authenticity of official documents like IDs, passports, certificates, and invoices.
              </p>
            </div>
          </Link>

          {/* Card 6: Trust Score */}
          <Link to="/trustscore">
            <div className="h-full p-6 bg-gray-900 rounded-xl border border-gray-700 hover:border-[#00ff41] transition hover:shadow-lg hover:shadow-[#00ff41]/20">
              <div className="mb-4 text-3xl text-[#00ff41]"><FaShieldAlt /></div>
              <h4 className="text-xl font-semibold mb-3">Trust Score Aggregation</h4>
              <p className="text-gray-400">
                Combines outputs from all AI models into a single, easy-to-understand trust score with a color-coded risk indicator, simplifying decision-making for users.
              </p>
            </div>
          </Link>
        </div>

        {/* Platform Benefits Section */}
        <div className="mt-16 bg-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#00ff41' }}>
            Why Choose InkSpector?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-700/30 p-6 rounded-lg">
              <h3 className="font-bold mb-3 text-lg" style={{ color: '#00ff41' }}>
                Comprehensive Coverage
              </h3>
              <p className="text-gray-300">
                Our integrated platform covers all aspects of digital identity verification from media to documents in one unified solution.
              </p>
            </div>
            <div className="bg-gray-700/30 p-6 rounded-lg">
              <h3 className="font-bold mb-3 text-lg" style={{ color: '#00ff41' }}>
                Military-Grade Security
              </h3>
              <p className="text-gray-300">
                All verifications are performed with enterprise-grade encryption and never store sensitive customer data.
              </p>
            </div>
            <div className="bg-gray-700/30 p-6 rounded-lg">
              <h3 className="font-bold mb-3 text-lg" style={{ color: '#00ff41' }}>
                Seamless Integration
              </h3>
              <p className="text-gray-300">
                Easy-to-use APIs and SDKs allow quick implementation into your existing workflows and systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
