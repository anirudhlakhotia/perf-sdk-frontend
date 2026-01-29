/**
 * DEFAULT CONFIGURATION CONSTANTS
 * Single source of truth for default cluster and system configurations
 * Consolidates duplicate DEFAULT_CLUSTER configurations across 3 files
 */

// ==========================================
// CLUSTER CONFIGURATION
// ==========================================

/**
 * Default cluster configuration.
 * Used by dashboard service, API service, and legacy dashboard client
 */
export const DEFAULT_CLUSTER = {
  type: "unmanaged",
  memory: 28000,
  version: "8.0.0-3777-enterprise",
  cpuCount: 16,
  replicas: 0,
  nodeCount: 1,
  // We intentionally no longer match on:
  // * connectionString, as it was excluding FaaS results (they run against cbdino).  However, it is likely to mean requiring a different way to handle CNG later.
  // * storage, as it also excluded FaaS results, and we do no storage-specific testing (currently).
} as const

/**
 * Default cluster versions for UI components
 * Used in dropdowns and initial selections
 */
export const DEFAULT_CLUSTERS = ['8.0.0-3777-enterprise'] as const

/**
 * Available cluster versions for selection
 * Extend this list as new versions become available
 */
export const AVAILABLE_CLUSTER_VERSIONS = [
  '8.0.0-3777-enterprise',
  '7.1.1-3175-enterprise',
  '7.0.3-7031-enterprise',
  '6.6.6-9213-enterprise',
  // Add new versions here as they become available
] as const

// ==========================================
// WORKLOAD CONFIGURATIONS (Exact Vue workload shapes)
// ==========================================

/**
 * EXACT Vue dashboard workload definitions - MUST MATCH Shared.vue
 * These shapes are used in databaseCompare.workload for dashboard queries.
 */
export const DEFAULT_WORKLOAD_GET = {
  "operations": [{
    "op": "get",
    "bounds": { "forSeconds": "$forSeconds" },
    "docLocation": { "method": "pool", "poolSize": "$poolSize", "poolSelectionStrategy": "randomUniform" }
  }]
} as const

export const DEFAULT_WORKLOAD_REPLACE = {
  "operations": [{
    "op": "replace",
    "bounds": { "forSeconds": "$forSeconds" },
    "docLocation": { "method": "pool", "poolSize": "$poolSize", "poolSelectionStrategy": "counter" }
  }]
} as const

export const DEFAULT_WORKLOAD_INSERT = {
  "operations": [{
    "op": "insert",
    "bounds": { "forSeconds": "$forSeconds" },
    "docLocation": { "method": "uuid" }
  }]
} as const

// ==========================================
// VARIABLE CONFIGURATIONS
// ==========================================

/**
 * Default variables for performance testing
 */
export const DEFAULT_VARS = {
  poolSize: 10000,
  threads: 20,
  operations: 1000000,
  documentSize: 1024,
  batchSize: 100
} as const

/**
 * Default implementation configuration
 */
export const DEFAULT_IMPL = {
  language: "java",
  sdk: "couchbase", 
  version: "3.0.1"
} as const

// ==========================================
// DASHBOARD CONFIGURATION
// ==========================================

/**
 * Default dashboard settings
 */
export const DEFAULT_DASHBOARD_CONFIG = {
  graphType: "Simplified",
  multipleResultsHandling: "Merged",
  mergingType: "Average",
  trimmingSeconds: 20,
  excludeSnapshots: true,
  excludeGerrit: true,
  refreshInterval: 30000, // 30 seconds
} as const

/**
 * Default pagination settings
 */
export const DEFAULT_PAGINATION = {
  page: 1,
  limit: 50,
  maxLimit: 1000
} as const

// ==========================================
// ENVIRONMENT CONFIGURATIONS
// ==========================================

/**
 * Available environments for testing
 */
export const AVAILABLE_ENVIRONMENTS = [
  'Production',
  'Development', 
  'Staging',
  'Sandbox (Capella)',
  'Local'
] as const

/**
 * Default environment for new runs
 */
export const DEFAULT_ENVIRONMENT = 'Development' as const
