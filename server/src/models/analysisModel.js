/**
 * SatQuery AI - Analysis Query Model (Placeholder Schema)
 * Defines the future data schema for user natural language queries,
 * target satellite imagery, model routing, and analysis results.
 *
 * NOTE: This schema will be activated when MongoDB persistence is enabled.
 */
import mongoose from 'mongoose';

const AnalysisSchema = new mongoose.Schema(
  {
    queryText: {
      type: String,
      required: true,
      trim: true,
    },
    taskType: {
      type: String,
      enum: [
        'general_vqa',
        'object_detection',
        'land_cover',
        'change_detection',
        'geospatial_measurement',
      ],
      default: 'general_vqa',
    },
    imageUrl: {
      type: String,
      required: false,
    },
    metadata: {
      sensorType: String, // e.g. Sentinel-2, Landsat-8/9, PlanetScope, Aerial
      resolutionMeters: Number,
      acquisitionDate: Date,
      coordinates: {
        latitude: Number,
        longitude: Number,
      },
    },
    status: {
      type: String,
      enum: ['pending', 'processing', 'completed', 'failed'],
      default: 'pending',
    },
    results: {
      answer: String,
      detectedObjects: [
        {
          label: String,
          confidence: Number,
          boundingBox: [Number], // [x_min, y_min, x_max, y_max]
        },
      ],
      segmentationMaskUrl: String,
      changeScore: Number,
      rawAiResponse: mongoose.Schema.Types.Mixed,
    },
  },
  {
    timestamps: true,
  }
);

export const Analysis = mongoose.models.Analysis || mongoose.model('Analysis', AnalysisSchema);
export default Analysis;
