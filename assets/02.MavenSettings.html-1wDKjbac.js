import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,a as i}from"./app-ytEAYCZ3.js";const a={},t=i(`<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>

<span class="token comment">&lt;!--
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
&quot;License&quot;); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
&quot;AS IS&quot; BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
--&gt;</span>

<span class="token comment">&lt;!--
 | This is the configuration file for Maven. It can be specified at two levels:
 |
 |  1. User Level. This settings.xml file provides configuration for a single user,
 |                 and is normally provided in \${user.home}/.m2/settings.xml.
 |
 |                 NOTE: This location can be overridden with the CLI option:
 |
 |                 -s /path/to/user/settings.xml
 |
 |  2. Global Level. This settings.xml file provides configuration for all Maven
 |                 users on a machine (assuming they&#39;re all using the same Maven
 |                 installation). It&#39;s normally provided in
 |                 \${maven.conf}/settings.xml.
 |
 |                 NOTE: This location can be overridden with the CLI option:
 |
 |                 -gs /path/to/global/settings.xml
 |
 | The sections in this sample file are intended to give you a running start at
 | getting the most out of your Maven installation. Where appropriate, the default
 | values (values used when the setting is not specified) are provided.
 |
 |--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>settings</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/SETTINGS/1.2.0<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/SETTINGS/1.2.0 https://maven.apache.org/xsd/settings-1.2.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- localRepository
   | The path to the local repository maven will use to store artifacts.
   |
   | Default: \${user.home}/.m2/repository

    --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>localRepository</span><span class="token punctuation">&gt;</span></span>D:/java/apache-maven-3.8.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>localRepository</span><span class="token punctuation">&gt;</span></span>


  <span class="token comment">&lt;!-- interactiveMode
   | This will determine whether maven prompts you when it needs input. If set to false,
   | maven will use a sensible default value, perhaps based on some other setting, for
   | the parameter in question.
   |
   | Default: true
  &lt;interactiveMode&gt;true&lt;/interactiveMode&gt;
  --&gt;</span>

  <span class="token comment">&lt;!-- offline
   | Determines whether maven should attempt to connect to the network when executing a build.
   | This will have an effect on artifact downloads, artifact deployment, and others.
   |
   | Default: false
  &lt;offline&gt;false&lt;/offline&gt;
  --&gt;</span>

  <span class="token comment">&lt;!-- pluginGroups
   | This is a list of additional group identifiers that will be searched when resolving plugins by their prefix, i.e.
   | when invoking a command line like &quot;mvn prefix:goal&quot;. Maven will automatically add the group identifiers
   | &quot;org.apache.maven.plugins&quot; and &quot;org.codehaus.mojo&quot; if these are not already contained in the list.
   |--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pluginGroups</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- pluginGroup
     | Specifies a further group identifier to use for plugin lookup.
    &lt;pluginGroup&gt;com.your.plugins&lt;/pluginGroup&gt;
    --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pluginGroups</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- TODO Since when can proxies be selected as depicted? --&gt;</span>
  <span class="token comment">&lt;!-- proxies
   | This is a list of proxies which can be used on this machine to connect to the network.
   | Unless otherwise specified (by system property or command-line switch), the first proxy
   | specification in this list marked as active will be used.
   |--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>proxies</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- proxy
     | Specification for one proxy, to be used in connecting to the network.
     |
    &lt;proxy&gt;
      &lt;id&gt;optional&lt;/id&gt;
      &lt;active&gt;true&lt;/active&gt;
      &lt;protocol&gt;http&lt;/protocol&gt;
      &lt;username&gt;proxyuser&lt;/username&gt;
      &lt;password&gt;proxypass&lt;/password&gt;
      &lt;host&gt;proxy.host.net&lt;/host&gt;
      &lt;port&gt;80&lt;/port&gt;
      &lt;nonProxyHosts&gt;local.net|some.host.com&lt;/nonProxyHosts&gt;
    &lt;/proxy&gt;
    --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>proxies</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- servers
   | This is a list of authentication profiles, keyed by the server-id used within the system.
   | Authentication profiles can be used whenever maven must make a connection to a remote server.
   |--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servers</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- server
     | Specifies the authentication information to use when connecting to a particular server, identified by
     | a unique name within the system (referred to by the &#39;id&#39; attribute below).
     |
     | NOTE: You should either specify username/password OR privateKey/passphrase, since these pairings are
     |       used together.
     |
    &lt;server&gt;
      &lt;id&gt;deploymentRepo&lt;/id&gt;
      &lt;username&gt;repouser&lt;/username&gt;
      &lt;password&gt;repopwd&lt;/password&gt;
    &lt;/server&gt;
    --&gt;</span>


    <span class="token comment">&lt;!-- Another sample, using keys to authenticate.
    &lt;server&gt;
      &lt;id&gt;siteServer&lt;/id&gt;
      &lt;privateKey&gt;/path/to/private/key&lt;/privateKey&gt;
      &lt;passphrase&gt;optional; leave empty if not used.&lt;/passphrase&gt;
    &lt;/server&gt;
    --&gt;</span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>server</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>admin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>username</span><span class="token punctuation">&gt;</span></span>admin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>username</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>password</span><span class="token punctuation">&gt;</span></span>admin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>password</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>server</span><span class="token punctuation">&gt;</span></span>


  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servers</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- mirrors
   | This is a list of mirrors to be used in downloading artifacts from remote repositories.
   |
   | It works like this: a POM may declare a repository to use in resolving certain artifacts.
   | However, this repository may have problems with heavy traffic at times, so people have mirrored
   | it to several places.
   |
   | That repository definition will have a unique id, so we can create a mirror reference for that
   | repository, to be used as an alternate download site. The mirror site will be the preferred
   | server for that repository.
   |--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrors</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- mirror
     | Specifies a repository mirror site to use instead of a given repository. The repository that
     | this mirror serves has an ID that matches the mirrorOf element of this mirror. IDs are used
     | for inheritance and direct lookup purposes, and must be unique across the set of mirrors.
     |
    &lt;mirror&gt;
      &lt;id&gt;mirrorId&lt;/id&gt;
      &lt;mirrorOf&gt;repositoryId&lt;/mirrorOf&gt;
      &lt;name&gt;Human Readable Name for this Mirror.&lt;/name&gt;
      &lt;url&gt;http://my.repository.com/repo/path&lt;/url&gt;
    &lt;/mirror&gt;
     --&gt;</span>
<span class="token comment">&lt;!--    &lt;mirror&gt;--&gt;</span>
<span class="token comment">&lt;!--      &lt;id&gt;maven-default-http-blocker&lt;/id&gt;--&gt;</span>
<span class="token comment">&lt;!--      &lt;mirrorOf&gt;external:http:*&lt;/mirrorOf&gt;--&gt;</span>
<span class="token comment">&lt;!--      &lt;name&gt;Pseudo repository to mirror external repositories initially using HTTP.&lt;/name&gt;--&gt;</span>
<span class="token comment">&lt;!--      &lt;url&gt;http://0.0.0.0/&lt;/url&gt;--&gt;</span>
<span class="token comment">&lt;!--      &lt;blocked&gt;true&lt;/blocked&gt;--&gt;</span>
<span class="token comment">&lt;!--    &lt;/mirror&gt;--&gt;</span>



    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>admin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>central<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>admin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://192.168.118.8:8081/repository/maven-public/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>aliyun<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- 中心仓库的 mirror(镜像) --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>central<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>Nexus aliyun<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- aliyun仓库地址 以后所有要指向中心仓库的请求，都会指向aliyun仓库--&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>https://maven.aliyun.com/repository/public<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">&gt;</span></span>




  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrors</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- profiles
   | This is a list of profiles which can be activated in a variety of ways, and which can modify
   | the build process. Profiles provided in the settings.xml are intended to provide local machine-
   | specific paths and repository locations which allow the build to work in the local environment.
   |
   | For example, if you have an integration testing plugin - like cactus - that needs to know where
   | your Tomcat instance is installed, you can provide a variable here such that the variable is
   | dereferenced during the build process to configure the cactus plugin.
   |
   | As noted above, profiles can be activated in a variety of ways. One way - the activeProfiles
   | section of this document (settings.xml) - will be discussed later. Another way essentially
   | relies on the detection of a property, either matching a particular value for the property,
   | or merely testing its existence. Profiles can also be activated by JDK version prefix, where a
   | value of &#39;1.4&#39; might activate a profile when the build is executed on a JDK version of &#39;1.4.2_07&#39;.
   | Finally, the list of active profiles can be specified directly from the command line.
   |
   | NOTE: For profiles defined in the settings.xml, you are restricted to specifying only artifact
   |       repositories, plugin repositories, and free-form properties to be used as configuration
   |       variables for plugins in the POM.
   |
   |--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profiles</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- profile
     | Specifies a set of introductions to the build process, to be activated using one or more of the
     | mechanisms described above. For inheritance purposes, and to activate profiles via &lt;activatedProfiles/&gt;
     | or the command line, profiles have to have an ID that is unique.
     |
     | An encouraged best practice for profile identification is to use a consistent naming convention
     | for profiles, such as &#39;env-dev&#39;, &#39;env-test&#39;, &#39;env-production&#39;, &#39;user-jdcasey&#39;, &#39;user-brett&#39;, etc.
     | This will make it more intuitive to understand what the set of introduced profiles is attempting
     | to accomplish, particularly when you only have a list of profile id&#39;s for debug.
     |
     | This profile example uses the JDK version to trigger activation, and provides a JDK-specific repo.
    &lt;profile&gt;
      &lt;id&gt;jdk-1.4&lt;/id&gt;

      &lt;activation&gt;
        &lt;jdk&gt;1.4&lt;/jdk&gt;
      &lt;/activation&gt;

      &lt;repositories&gt;
        &lt;repository&gt;
          &lt;id&gt;jdk14&lt;/id&gt;
          &lt;name&gt;Repository for JDK 1.4 builds&lt;/name&gt;
          &lt;url&gt;http://www.myhost.com/maven/jdk14&lt;/url&gt;
          &lt;layout&gt;default&lt;/layout&gt;
          &lt;snapshotPolicy&gt;always&lt;/snapshotPolicy&gt;
        &lt;/repository&gt;
      &lt;/repositories&gt;
    &lt;/profile&gt;
    --&gt;</span>

    <span class="token comment">&lt;!--
     | Here is another profile, activated by the property &#39;target-env&#39; with a value of &#39;dev&#39;, which
     | provides a specific path to the Tomcat instance. To use this, your plugin configuration might
     | hypothetically look like:
     |
     | ...
     | &lt;plugin&gt;
     |   &lt;groupId&gt;org.myco.myplugins&lt;/groupId&gt;
     |   &lt;artifactId&gt;myplugin&lt;/artifactId&gt;
     |
     |   &lt;configuration&gt;
     |     &lt;tomcatLocation&gt;\${tomcatPath}&lt;/tomcatLocation&gt;
     |   &lt;/configuration&gt;
     | &lt;/plugin&gt;
     | ...
     |
     | NOTE: If you just wanted to inject this configuration whenever someone set &#39;target-env&#39; to
     |       anything, you could just leave off the &lt;value/&gt; inside the activation-property.
     |
    &lt;profile&gt;
      &lt;id&gt;env-dev&lt;/id&gt;

      &lt;activation&gt;
        &lt;property&gt;
          &lt;name&gt;target-env&lt;/name&gt;
          &lt;value&gt;dev&lt;/value&gt;
        &lt;/property&gt;
      &lt;/activation&gt;

      &lt;properties&gt;
        &lt;tomcatPath&gt;/path/to/tomcat/instance&lt;/tomcatPath&gt;
      &lt;/properties&gt;
    &lt;/profile&gt;
    --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profiles</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- activeProfiles
   | List of profiles that are active for all builds.
   |
  &lt;activeProfiles&gt;
    &lt;activeProfile&gt;alwaysActiveProfile&lt;/activeProfile&gt;
    &lt;activeProfile&gt;anotherAlwaysActiveProfile&lt;/activeProfile&gt;
  &lt;/activeProfiles&gt;
  --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>settings</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[t];function o(c,r){return s(),e("div",null,l)}const v=n(a,[["render",o],["__file","02.MavenSettings.html.vue"]]);export{v as default};
