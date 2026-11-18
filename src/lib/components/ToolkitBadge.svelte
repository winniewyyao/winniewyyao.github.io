<script>
  let { tool } = $props();
  let parts = $derived(tool.split(':'));
</script>

<strong class="toolkit tool-{parts[0]}">{parts[1]}</strong>