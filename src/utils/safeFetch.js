export async function safeFetchJson(path, { timeoutMs = 8000 } = {}) {
  if (typeof path !== 'string' || !path.startsWith('/')) {
    throw new Error('safeFetchJson: path must be a same-origin path starting with /');
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(path, {
      signal: controller.signal,
      credentials: 'omit',
      referrerPolicy: 'no-referrer',
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.json();
  } finally {
    clearTimeout(timer);
  }
}
