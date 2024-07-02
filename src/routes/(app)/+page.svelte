<script>
  import Header from "../../lib/components/pages/landing/hero/Header.svelte";
  export let data;
  console.log(data)

</script>
<div class="">
    <Header HeaderData={data.page.sections[0]} />
</div>