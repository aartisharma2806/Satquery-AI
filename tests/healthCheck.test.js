/**
 * SatQuery AI - Backend Health Check Automated Test
 * Verifies that the Express server responds on GET /api/health with status 200.
 */

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5000';

async function testHealthEndpoint() {
  console.log(`🔍 Testing SatQuery AI Health Check endpoint at: ${BACKEND_URL}/api/health`);

  try {
    const res = await fetch(`${BACKEND_URL}/api/health`);
    console.log(`📡 Response Status: ${res.status} ${res.statusText}`);

    if (res.status !== 200) {
      throw new Error(`Expected HTTP 200, got ${res.status}`);
    }

    const data = await res.json();
    console.log('📦 Response Body:\n', JSON.stringify(data, null, 2));

    if (!data.success || data.data?.status !== 'healthy') {
      throw new Error('Health check payload did not report status: healthy');
    }

    console.log('\n✅ PASS: SatQuery AI backend health check succeeded!');
  } catch (err) {
    console.error('\n❌ FAIL: SatQuery AI health check failed:', err.message);
    process.exit(1);
  }
}

testHealthEndpoint();
