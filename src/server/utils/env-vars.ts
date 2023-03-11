export const getEnvVar = (envVariable: string, defaultValue?: string): string => {
  const envValue = process.env[envVariable]

  if (!envValue) {
    // Fail the startup if env variable is not set in Heroku
    // This at least forces you to specify the env variable.
    if (defaultValue === undefined) throw new Error(`failed for env variable: ${envVariable}`)
    return defaultValue
  }

  return envValue
}
