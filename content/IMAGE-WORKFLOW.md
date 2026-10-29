# Oddities illustration workflow

The existing Eureka Springs AI illustration is the visual reference. Preserve its muted teal-gray palette, low-key cinematic dusk, fine grain, and weathered detail. Do not change the skull logo or category icon system as part of image work.

## Repeatable authoring

1. Add or research a catalog entry. Keep the discovery pitch separate from access guidance.
2. Run `node tools/build-image-queue.cjs`. It creates one prompt per unapproved location in `content/image-queue.jsonl`, keyed by stable location ID. It makes no paid generation calls.
3. Generate individual assets using the prompts and the original reference. The built-in image-generation workflow can use these prompts directly. Automation through an API is a separate server-side integration; never store an API key in this public repository.
4. Review architectural plausibility, atmosphere, cropping, and obvious invented details. Use approved visual references for recognizable buildings. Do not invent a victim's last moments, crime-scene evidence, or a purported paranormal photograph.
5. Use `python tools/approve-image.py --id LOCATION-ID --input REVIEWED-IMAGE.png --approve` to make 400, 800, and 1200 pixel WebP variants, record approval, and attach the asset to its location. Pillow is required for this offline tool. Set `--focus-x` and `--focus-y` from 0 to 1 to adjust the crop. Existing assets require an explicit `--replace`.
6. Preview the card and detail pane before publishing. Category artwork remains available for entries awaiting illustration.

AI illustrations are labeled inside the location details. The image manifest records the reference, prompt, prompt version, review status, and crop focus. Regenerate the queue after approving new images.

## At larger scale

Move approved images to object storage/CDN, keeping location IDs and the manifest. A real generation queue should have retry limits, per-batch budgets, review status, and server-side credentials. Generate only approved subjects, publish only reviewed outputs, and retain source files outside the public web bundle. No image-generation or authentication secret belongs in the browser.

## Initial sample

The Silver Plume illustration was generated with the built-in image tool using `images/eureka.webp` as a style reference. It is an atmospheric interpretation, not a literal photograph of the town or evidence connected to either disappearance. Its final prompt is recorded in the manifest. Generation did not replace the original Eureka Springs artwork.
